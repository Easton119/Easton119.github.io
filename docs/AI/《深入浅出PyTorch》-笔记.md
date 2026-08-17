---
categories:
  - ai
tags:
  - Pytorch
  - ONNX
createTime: 2026/08/09 19:27:26
title: 《深入浅出PyTorch》-笔记
permalink: /article/h9vj0dh7/
---


[第零章：前置知识 — 深入浅出PyTorch](https://datawhalechina.github.io/thorough-pytorch/%E7%AC%AC%E9%9B%B6%E7%AB%A0/index.html)

## 基础知识
硬件加速设备
cpu,gpu之外，
专用集成电路（Application-Specific Integrated Circuit，ASIC）
谷歌的TPU，寒武纪的NPU都属于ASIC的范畴

TPU即Tensor Processing Unit，中文名为张量处理器
NPU即Neural-network Processing Unit，中文名为神经网络处理器

## 使用ONNX进行部署并推理
[9.1 使用ONNX进行部署并推理 — 深入浅出PyTorch](https://datawhalechina.github.io/thorough-pytorch/%E7%AC%AC%E4%B9%9D%E7%AB%A0/9.1%20%E4%BD%BF%E7%94%A8ONNX%E8%BF%9B%E8%A1%8C%E9%83%A8%E7%BD%B2%E5%B9%B6%E6%8E%A8%E7%90%86.html)

通常人们会将模型部署在手机端、开发板，嵌入式设备上，但是这些设备上由于框架的规模，环境依赖，算力的限制，我们无法直接使用训练好的权重进行推理，因此我们需要将得到的权重进行变换才能使我们的模型可以成功部署在上述设备上。而经过工业界和学术界多年的探索，出现了以下的模型部署pipeline：

![image.png](https://raw.githubusercontent.com/Easton119/oss/master/test111/20260810205555.png)

而在本节中我们会将PyTorch训练好的模型转换为ONNX 格式，然后使用ONNX Runtime运行它进行推理。
### ONNX简介
#### ONNX简介
**ONNX( Open Neural Network Exchange)** 是用于标准描述计算图的一种格式。ONNX通过定义一组与环境和平台无关的标准格式，使AI模型可以在不同框架和环境下交互使用，ONNX可以看作深度学习框架和部署端的桥梁，就像编译器的中间语言一样。
由于各框架兼容性不一，我们通常只用 ONNX 表示更容易部署的静态图。使用不同框架训练的模型，转化为ONNX格式后，可以很容易的部署在兼容ONNX的运行环境中。

#### ONNX Runtime简介
**ONNX Runtime** 是由微软维护的一个跨平台机器学习推理加速器，它直接对接ONNX，可以直接读取.onnx文件并实现推理，不需要再把 .onnx 格式的文件转换成其他格式的文件。PyTorch借助ONNX Runtime也完成了部署的最后一公里，构建了 PyTorch --> ONNX --> ONNX Runtime 部署流水线，我们只需要将模型转换为 .onnx 文件，并在 ONNX Runtime 上运行模型即可。

#### ONNX和ONNX Runtime的安装

ONNX和ONNX Runtime作为python的一个包与其他包的安装方法相同，使用conda或者pip进行安装
``` unfold
# 激活虚拟环境
conda activate env_name # env_name换成环境名称
# 安装onnx
pip install onnx 
# 安装onnx runtime
pip install onnxruntime # 使用CPU进行推理
# pip install onnxruntime-gpu # 使用GPU进行推理
```

需要注意ONNX和ONNX Runtime之间的适配关系。可以访问ONNX Runtime的Github进行查看，ONNX和ONNX Runtime的适配关系：https://github.com/microsoft/onnxruntime/blob/master/docs/Versioning.md
<mark style="background: #FFB86CA6;">当我们想使用GPU进行推理时，我们需要先将安装的onnxruntime卸载，再安装onnxruntime-gpu</mark>，同时我们还需要考虑ONNX Runtime与CUDA之间的适配关系，参考以下链接：ONNX Runtime和CUDA之间的适配关系：https://onnxruntime.ai/docs/execution-providers/CUDA-ExecutionProvider.html
此处安装版本：`onnx-1.22.0`， `onnxruntime-gpu-1.26.0`（目前最高1.28.0，降级安装1.26.0 来适配cuda12.6）
```python file:验证是否安装成功 unfold
import onnxruntime as ort
# 查看当前可用执行提供者
providers = ort.get_available_providers()
print("目前可用的 Provider:", providers)

# 验证 CUDA 显卡加速是否生效
if 'CUDAExecutionProvider' in providers:
    print("✅ ONNX Runtime 已成功绑定 CUDA 12.x,GPU 加速正常！")
else:
    print("❌ 依然未能识别 GPU,请检查环境。")
```


### 模型导出为ONNX
#### 模型转换为ONNX格式
在接下来的部分，我们将使用`torch.onnx.export()`把模型转换成 ONNX 格式的函数。模型导成onnx格式前，我们必须调用`model.eval()`或者`model.train(False)`以确保我们的模型处在推理模式下，避免因为`dropout`或`batchnorm`等运算符在推理和训练模式下的不同产生错误。（因为本课程偏向实战，对于ONNX的内部流程不做过多赘述）
```python unfold
import torch.onnx 
# 转换的onnx格式的名称，文件后缀需为.onnx
onnx_file_name = "xxxxxx.onnx"
# 我们需要转换的模型，将torch_model设置为自己的模型
model = torch_model
# 加载权重，将model.pth转换为自己的模型权重
# 如果模型的权重是使用多卡训练出来，我们需要去除权重中多的module. 具体操作可以见5.4节
model = model.load_state_dict(torch.load("model.pth"))
# 导出模型前，必须调用model.eval()或者model.train(False)
model.eval()
# dummy_input就是一个输入的实例，仅提供输入shape、type等信息 
batch_size = 1 # 随机的取值，当设置dynamic_axes后影响不大
dummy_input = torch.randn(batch_size, 1, 224, 224, requires_grad=True) 
# 这组输入对应的模型输出
output = model(dummy_input)
# 导出模型
torch.onnx.export(model,        # 模型的名称
                  dummy_input,   # 一组实例化输入
                  onnx_file_name,   # 文件保存路径/名称
                  export_params=True,        #  如果指定为True或默认, 参数也会被导出. 如果你要导出一个没训练过的就设为 False.
                  opset_version=10,          # ONNX 算子集的版本，当前已更新到15
                  do_constant_folding=True,  # 是否执行常量折叠优化
                  input_names = ['input'],   # 输入模型的张量的名称
                  output_names = ['output'], # 输出模型的张量的名称
                  # dynamic_axes将batch_size的维度指定为动态，
                  # 后续进行推理的数据可以与导出的dummy_input的batch_size不同
                  dynamic_axes={'input' : {0 : 'batch_size'},    
                                'output' : {0 : 'batch_size'}})
```

#### ONNX模型的检验
当上述代码运行成功后，我们会得到一个ONNX 模型文件。我们需要检测下我们的模型文件是否可用，我们将通过`onnx.checker.check_model()`进行检验，具体方法如下：
```python unfold
import onnx
# 我们可以使用异常处理的方法进行检验
try:
    # 当我们的模型不可用时，将会报出异常
    onnx.checker.check_model(self.onnx_model)
except onnx.checker.ValidationError as e:
    print("The model is invalid: %s"%e)
else:
    # 模型可用时，将不会报出异常，并会输出“The model is valid!”
    print("The model is valid!")
```

#### ONNX可视化
在将模型导出为onnx格式后，我们希望有个工具可以像Tensorboard一样可视化模型来观察每个节点的属性特征。随着`Netron`的出现，我们也可以实现onnx的可视化。

### 使用ONNX Runtime进行推理
通过以上的操作，我们已经完成了PyTorch的模型到ONNX模型的转换，并通过Netron可视化和`onnx.checker.check_model()`检查了模型的正确性。在这一步，我们将使用ONNX Runtime运行一下转化后的模型，看一下推理后的结果。
```python unfold
# 导入onnxruntime
import onnxruntime
# 需要进行推理的onnx模型文件名称
onnx_file_name = "xxxxxx.onnx"

# onnxruntime.InferenceSession用于获取一个 ONNX Runtime 推理器
ort_session = onnxruntime.InferenceSession(onnx_file_name)  

# 构建字典的输入数据，字典的key需要与我们构建onnx模型时的input_names相同
# 输入的input_img 也需要改变为ndarray格式
ort_inputs = {'input': input_img} 
# 我们更建议使用下面这种方法,因为避免了手动输入key
# ort_inputs = {ort_session.get_inputs()[0].name:input_img}

# run是进行模型的推理，第一个参数为输出张量名的列表，一般情况可以设置为None
# 第二个参数为构建的输入值的字典
# 由于返回的结果被列表嵌套，因此我们需要进行[0]的索引
ort_output = ort_session.run(None,ort_inputs)[0]
# output = {ort_session.get_outputs()[0].name}
# ort_output = ort_session.run([output], ort_inputs)[0]
```

在上述的步骤中，我们有几个需要注意的点：
PyTorch模型的输入为tensor，而ONNX的输入为array，因此我们需要对张量进行变换或者直接将数据读取为array格式，我们可以实现下面的方式进行张量到array的转化
```python unfold
def to_numpy(tensor):
    return tensor.detach().cpu().numpy() if tensor.requires_grad else tensor.cpu().numpy()
```

输入的array的shape应该和我们导出模型的`dummy_input`的shape相同，如果图片大小不一样，我们应该先进行resize操作。 
run的结果是一个列表，我们需要进行索引操作才能获得array格式的结果。
在构建输入的字典时，我们需要注意字典的key应与导出ONNX格式设置的input_name相同，因此我们更建议使用上述的第二种方法构建输入的字典。

### 代码实战

具体内容见原网页。
#### 问题部分
>以上是使用onnx进行部署并推理的代码实战部分。有一些问题：首先，这个模型是已经训练好了的吗？然后，onnx不是为了部署在端侧的吗，这里也没体现部署在端侧啊？这和直接用原模型进行推理有什么区别。

一、 这个模型是已经训练好了的吗？
是的，它是训练好的。
代码通过 `model_zoo.load_url` 自动从 Amazon S3 服务器下载了一个官方训练了 **100 个轮次（epoch）** 的预训练权重文件（`.pth`），并成功加载到了 `torch_model` 中。因此导出的是具备完整超分辨率能力的高清重建模型。

二、 为什么代码里没有体现“部署在端侧”？
因为这段代码展示的是“开发者的本地导出与对齐验证阶段”（即部署之前的准备工作）。
完整的部署流水线通常分为两个阶段：
1. 开发/验证阶段（也就是你这段代码在做的事）：
    - 在你的 PC/服务器（Python 环境）上定义模型、加载权重。
    - 导出为 `super_resolution.onnx`。
    - 在 Python 中用 ONNX Runtime 跑一次（第 4、5 部分），确认导出的 ONNX 模型和原 PyTorch 模型算出来的结果完全一致（`np.testing.assert_allclose`），确保模型没导坏。
2. 生产/端侧部署阶段（后续真正上线的步骤）：
    - 你不再需要 Python 环境，只需把生成的 `super_resolution.onnx` 这一个文件打包。
    - 拷贝到 Android/iOS 手机（用 C++/Java 调用 ONNX Runtime 或 NCNN）、嵌入式设备（用 C++ 调用 RKNN/Tengine）或 C# 桌面软件中。
    - 在端侧直接读取 `.onnx` 文件进行推理。

三、 这和直接用 PyTorch 原模型推理有什么区别？

如果你只在本地电脑上跑一次推理，看起来结果是一样的，但底层机制和应用场景有着本质区别：

| **维度**      | 直接用 PyTorch 原模型 (torch_model)                              | 使用 ONNX + ONNX Runtime (.onnx)                                                             |
| ----------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **运行依赖**    | **极度笨重**。目标机器必须安装巨大的 PyTorch 库（几个 GB）、Python 环境及 CUDA 依赖包。 | **极度轻量**。只需要一个几十 MB 的 ONNX Runtime 动态库（如 `.so` 或 `.dll`），支持 C++/C#/Java 等原生环境，完全脱离 Python。 |
| **推理速度与优化** | 主要依靠 PyTorch 的通用计算图，包含大量的 Python 动态解释开销。                   | **算子图融合与优化**。ONNX Runtime 会自动对网络图进行优化（如常量折叠、节点合并、显存重用），推理速度通常比原生 PyTorch 快 1.5x ~ 3x。      |
| **硬件适配能力**  | 主要面向 CPU 和 NVIDIA 显卡。                                      | **全硬件通用**。同一份 `.onnx` 文件，放到 Intel CPU 调用 OpenVINO，放到 NV 显卡调用 TensorRT，放到手机/NPU 调用系统硬件加速驱动。 |
| **知识产权保护**  | Python 源码和 `.pth` 文件容易被反编译或提取。                             | `.onnx` 是编译后的计算图二进制文件，不易被逆向解析。                                                             |

>关于“开发/验证阶段”，“加载权重”是什么意思，这个权重是怎么来的。导出ONNX 模型 这一步骤 是由什么自动完成的吗

一、 什么是“加载权重”？
可以把神经网络分为两部分：
1. 模型结构（代码）： 就像一张空白的数学公式表（如 $y = w \cdot x + b$），或者一套没有填入具体数值的计算步骤。你刚写完 `SuperResolutionNet` 类时，它只定义了“网络有几层、怎么连接”，但里面的参数 $w$ 和 $b$ 全是随机生成的无意义乱码。如果此时让它跑图片，输出的只会是一堆噪声。
2. 权重数据（文件）：经过成千上万次训练后算出来的最佳参数集合（比如各种矩阵数值）。
“加载权重”（即 `load_state_dict`）就是把这些保存在磁盘（`.pth` 文件）里的具体数值，填入到模型结构的对应公式里，让模型立刻具备“将图片放大 3 倍”的超分辨率能力。

二、 这个权重是怎么来的
权重并不是你在本地训练出来的，而是直接通过 `model_zoo.load_url(...)` 从 PyTorch 官方的云端服务器下载了他们已经训练好第 100 个 Epoch 的权重文件。

三、 导出 ONNX 模型是自动完成的吗？
是的，这个“翻译”过程是由 PyTorch 底层的 `torch.onnx.export()` 引擎自动追踪并完成的。
你不需要手动去逐行把 PyTorch 的代码改写成 ONNX 的标准，PyTorch 内部采用了名为 Tracing（计算图追踪） 的机制来自动完成这件事：
1. “假数据”踩点（Tracing）：
    你在代码里传入了一个 `x = torch.randn(...)`（即 `dummy_input` 虚构输入），PyTorch 会把这个假数据送进 `torch_model` 跑一遍。
2. 记录计算路径：
    在假数据流经 `conv1` $\rightarrow$ `relu` $\rightarrow$ `pixel_shuffle` 的过程中，PyTorch 的导出引擎就像摄像机一样，实时记录下数据经过的所有数学运算符（卷积、激活、形状重排等）。
3. 自动翻译与打包：
    引擎将记录好的计算路径翻译成 ONNX 统一规范的算子（Operators），并把你加载好的权重数据打包进去，最终自动生成并写入 `.onnx` 文件。
你只需要写好 `torch.onnx.export()` 这几行配置参数，剩下的模型转换全由 PyTorch 后台自动搞定。


#### 源代码：
包括：
1. 定义超分辨模型
2. 模型导出为onnx格式：从官网加载权重并导出.onnx文件
3. 检验onnx模型：检验onnx文件本身
4. 使用onnx RunTime进行推理：onnx RunTime推理后得到数据与PyTorch的进行对比
5. 进行实际预测并可视化：实际运行图片

注意事项：
要么在一整个文件中运行，要么放在jupyter notebook中运行（推荐）；
额外下载onnxscript包；
第二部分导出时设置`opset_version=18`；
第四部分设置`providers = ['CUDAExecutionProvider', 'CPUExecutionProvider']`，`ort_session = onnxruntime.InferenceSession("super_resolution.onnx",providers = providers)`,
设置`atol=1e-03`降低精度要求；
第五部分设置图片读取和存放路径为当前文件夹下
1. <mark style="background: #FFB8EBA6;">定义超分辨模型</mark>
```python 
# 导入相关包
import io
import numpy as np
from torch import nn
import torch.utils.model_zoo as model_zoo
import torch.onnx
import torch.nn as nn
import torch.nn.init as init

# 定义超分辨网络
class SuperResolutionNet(nn.Module):
    def __init__(self, upscale_factor, inplace=False):
        super(SuperResolutionNet, self).__init__()

        self.relu = nn.ReLU(inplace=inplace)
        self.conv1 = nn.Conv2d(1, 64, (5, 5), (1, 1), (2, 2))
        self.conv2 = nn.Conv2d(64, 64, (3, 3), (1, 1), (1, 1))
        self.conv3 = nn.Conv2d(64, 32, (3, 3), (1, 1), (1, 1))
        self.conv4 = nn.Conv2d(32, upscale_factor ** 2, (3, 3), (1, 1), (1, 1))
        self.pixel_shuffle = nn.PixelShuffle(upscale_factor)

        self._initialize_weights()

    def forward(self, x):
        x = self.relu(self.conv1(x))
        x = self.relu(self.conv2(x))
        x = self.relu(self.conv3(x))
        x = self.pixel_shuffle(self.conv4(x))
        return x
    
	# 模型初始化
    def _initialize_weights(self):
        init.orthogonal_(self.conv1.weight, init.calculate_gain('relu'))
        init.orthogonal_(self.conv2.weight, init.calculate_gain('relu'))
        init.orthogonal_(self.conv3.weight, init.calculate_gain('relu'))
        init.orthogonal_(self.conv4.weight)

# 实例化模型
torch_model = SuperResolutionNet(upscale_factor=3)
```

2. <mark style="background: #FFB8EBA6;">模型导出为ONNX格式</mark>
```python 
model_url = 'https://s3.amazonaws.com/pytorch/test_data/export/superres_epoch100-44c6958e.pth'
batch_size = 1    # just a random number
# 加载预训练得到权重
map_location = lambda storage, loc: storage
if torch.cuda.is_available():
    map_location = None
torch_model.load_state_dict(model_zoo.load_url(model_url, map_location=map_location))

# 将模型设置为推理模式
torch_model.eval()
# Input to the model
x = torch.randn(batch_size, 1, 224, 224, requires_grad=True)
torch_out = torch_model(x)

# 导出模型
torch.onnx.export(torch_model,               # model being run
                  x,             # model input (or a tuple for multiple inputs)
                  "super_resolution.onnx",   # where to save the model (can be a file or file-like object)
                  export_params=True,        # store the trained parameter weights inside the model file
                  opset_version=18,   # the ONNX version to export the model to
                  do_constant_folding=True,  # whether to execute constant folding for optimization
                  input_names = ['input'],   # the model's input names
                  output_names = ['output'], # the model's output names
                  # variable length axes
                  dynamic_axes={'input' : {0 : 'batch_size'},    
                                'output' : {0 : 'batch_size'}})
```

3. <mark style="background: #FFB8EBA6;">检验ONNX模型</mark>

```python
import onnx
# 我们可以使用异常处理的方法进行检验
try:
    # 当我们的模型不可用时，将会报出异常
    onnx.checker.check_model("super_resolution.onnx")
except onnx.checker.ValidationError as e:
    print("The model is invalid: %s"%e)
else:
    # 模型可用时，将不会报出异常，并会输出“The model is valid!”
    print("The model is valid!")
```

4. <mark style="background: #FFB8EBA6;">使用ONNX Runtime进行推理</mark>

```python
import onnxruntime
# 将 CUDA (GPU) 放在第一优先级，CPU 作为后备方案
providers = ['CUDAExecutionProvider', 'CPUExecutionProvider']
ort_session = onnxruntime.InferenceSession("super_resolution.onnx", providers=providers)

# 将张量转化为ndarray格式
def to_numpy(tensor):
    return tensor.detach().cpu().numpy() if tensor.requires_grad else tensor.cpu().numpy()

# 构建输入的字典和计算输出结果
ort_inputs = {ort_session.get_inputs()[0].name: to_numpy(x)}
ort_outs = ort_session.run(None, ort_inputs)

# 比较使用PyTorch和ONNX Runtime得出的精度
np.testing.assert_allclose(to_numpy(torch_out), ort_outs[0], rtol=1e-03, atol=1e-03)

print("Exported model has been tested with ONNXRuntime, and the result looks good!")
```

5. <mark style="background: #FFB8EBA6;">进行实际预测并可视化</mark>

```python
from PIL import Image
import torchvision.transforms as transforms

# 读取图片
img = Image.open("cat.jpg")
# 对图片进行resize操作
resize = transforms.Resize([224, 224])
img = resize(img)

img_ycbcr = img.convert('YCbCr')
img_y, img_cb, img_cr = img_ycbcr.split()

to_tensor = transforms.ToTensor()
img_y = to_tensor(img_y)
img_y.unsqueeze_(0)
# 构建输入的字典并将value转换位array格式
ort_inputs = {ort_session.get_inputs()[0].name: to_numpy(img_y)}
ort_outs = ort_session.run(None, ort_inputs)
img_out_y = ort_outs[0]
img_out_y = Image.fromarray(np.uint8((img_out_y[0] * 255.0).clip(0, 255)[0]), mode='L')

# 保存最后得到的图片
final_img = Image.merge(
    "YCbCr", [
        img_out_y,
        img_cb.resize(img_out_y.size, Image.BICUBIC),
        img_cr.resize(img_out_y.size, Image.BICUBIC),
    ]).convert("RGB")

final_img.save("cat_superres_with_ort.jpg")
```




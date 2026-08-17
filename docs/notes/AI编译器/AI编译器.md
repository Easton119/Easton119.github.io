---
categories:
  - 编译器
tags:
  - 编译器
  - ai
createTime: 2026/08/04 20:38:35
title: AI编译器
permalink: /aicompiler/vmjyd4bl/
---
[传统编译器](传统编译器.md)
### 01 AI编译器出现的原因

<span style="background:#A0CCF6">AI编译器和传统编译器的相同点：</span>
+ 目标相同：通过自动化方式进行程序优化和代码生成，从而降低对不同硬件的手工优化；
- 优化方式类似：在编译优化层通过统一 IR执行不同的Pass进行优化，从而提高执行性能； 
- 软件结构栈类似：分成前端、优化、后端三段式，IR解耦前端和后端使得模块化表示；
- AI编译器依赖传统编译器：AI编译器对Graph IR进行优化后，将优化后的 IR转换成传统编译器 IR，最后依赖传统编译器针进行机器码生成。

<span style="background:#A0CCF6">AI编译器和传统编译器的区别：</span>

传统编译器输入高级语言，输出低级语言
AI编译器输入计算图/算子，输出低级语言。
- [ ] <font color=#da9b72>观看【计算图】的学习视频</font>

![image.png](https://raw.githubusercontent.com/Easton119/oss/master/test111/20260804225335.png)


IR 差异： 
+ AI编译器一般会有 high-level IR，用来抽象描述深度学习模型中的运算，如：Convolution、Matmul等，甚至部分会有 Transformer带有图的结构。
+ 传统编译器相对而言 low-level IR，用于描述基本指令运算，如 load、store等。有了high-level IR，AI编译器在描述深度学习模型类DSL更加方便。

优化策略：
AI编译器面向AI领域，优化时引入更多领域特定知识，从而进行更high-level，更加aggressive优化手段。如：
+ AI编译器在high-level IR执行算子融合，传统编译器执行类似 loop fusion<small>循环合并</small>时候，往往更加保守。缺点是可能会导致调试执行信息跟踪难；  
+ AI编译器可以降低计算精度，比如int8、fp16、bf16<small>（16位半精度浮点数）</small>等，因为深度学习对计算精度不那么敏感。但传统编译器一般不执行改变变量类型和精度等优化。



### 02 AI编译器架构发展

Stage 1 : 朴素的AI编译器
主要进行了计算图和算子两层抽象
- [x] <font color=#da9b72>观看【AI框架基础】视频：声明式编程，静态图</font> [AI框架的编程范式：声明式编程&命令式编程](../3卡片/AI框架的编程范式：声明式编程&命令式编程.md)

Stage 2 : 专用的AI编译器
表达上：以PyTorch为标杆的表达转换到计算图层IR进行优化
性能上：打开计算图和算子的边界，进行重新组合优化，发挥芯片的算力

Stage 3 （未来）：通用AI编译器
1. 图算统一表达，实现融合优化
2. 算子自动生成，降低开发门槛
3. 针对神经网络， 泛化优化能力
4. 模块化表示组合，提升可用性

### 03 AI编译器细节


### 04 AI编译器的挑战和未来



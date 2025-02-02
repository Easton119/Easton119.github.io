---
title: Redis基础
tags:
  - redis
categories:
  - 后端
  - redis
createTime: 2024/05/02 11:27:39
permalink: /article/t9lu0q8s/
---



# 安装与启动

[win10环境Redis安装及配置，以及Redis服务无法启动的解决方法_redis此应用无法在你的电脑上运行-CSDN博客](https://blog.csdn.net/qq_43948440/article/details/110076492)

密码设置：
requirepass 123456
启动redis-server :   redis-server.exe redis.windows.conf
启动redis-cli： redis-cli.exe -h 127.0.0.1 -p 6379
输入密码 auth 123456

# 操作命令
key- value
value有五种基本数据类型：字符串，哈希 hash，列表list , 集合 set , 有序集合 sorted set

可以在启动redis-cli时加上 --raw ，使得查看的值为原始值，这样中文不会被转成二进制显示
**string操作命令：**
SET key value
GET key
SETEX key seconds value 设置key的值，过期时间设置为seconds
SETNX key value 只有当key不存在时设置key的值

**hash：**
![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/1700824839007-b246e391-eadb-4439-80d1-be43c6918861.png)

**list：**
![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/1700826888405-5237320f-1d4a-4a1b-9f17-adcd5e9c0355.png)

**集合set**
![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/1700827267902-1687ca20-5606-45d0-8b33-7dfda95551f3.png)

**有序集合**
![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/1700828076794-eb2d2624-d09d-4634-a2a5-fb2625a7e5de.png)

redis通用命令：
keys pattern
exists key
type key
ttl key 返回给定key的剩余生存时间(ttl ,  time to live) , 以秒为单位
del key


# Java中操作redis
## Jedis
引入jedis-client依赖
```java
@Test
public void testJedis(){
    Jedis jedis = new Jedis("localhost", 6379);
    jedis.auth("123456");
    jedis.set("username","qiyijin");
    String username = jedis.get("username");
    System.out.println(username);
    jedis.close();
}
```
## springboot-starter-data-redis
导入依赖
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>x
  <artifactId>spring-boot-starter-data-redis</artifactId>
  <version>3.1.5</version>
</dependency>
```

redis相关配置
```yaml
# Redis相关配置
redis:
host: localhost
port: 6379
password: 123456
# 第0号数据库
database: 0
jedis:
#Redis连接池配置
pool:
max-active: 8
max-wait: 1ms
max-idle: 4
min-idle: 0
```

redis的测试方法
```java
@Autowired
private RedisTemplate redisTemplate;
/**
 * 注意在测试spring-boot-starter-data-redis的时候需要在类上加下面的注解
 * @SpringBootTest
 * @RunWith(SpringRunner.class)
 */
@Test
public void testString(){
    redisTemplate.opsForValue().set("myMeetingName123","imms");
    String val = (String) redisTemplate.opsForValue().get("myMeetingName123");
    System.out.println(val);
}
```

redis的config配置类
```java
@Configuration
public class RedisConfig extends CachingConfigurerSupport {
    @Bean
    public RedisTemplate<Object,Object> redisTemplate(RedisConnectionFactory connectionFactory){
        RedisTemplate<Object, Object> redisTemplate = new RedisTemplate<>();
        //默认的Key序列化器为：JdkSerializationRedisSerializer
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setHashKeySerializer(new StringRedisSerializer());
        redisTemplate.setConnectionFactory(connectionFactory);
        return redisTemplate;
    }
}
```


# redis线程模型

redis采用单线程为什么还这么快？

1. 在内存中运行
2. 避免了多线程之间的竞争
3. 采用了I/O多路复用机制

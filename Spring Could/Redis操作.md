

### 关于key的常用操作命令

| 命令                     | 备注                                               |
| :----------------------- | :------------------------------------------------- |
| keys *                   | 查询当前库的所有键                                 |
| exists < key>           | 判断某个键是否存在                                 |
| type < key>             | 查看键的类型                                       |
| del < key>              | 删除某个键                                         |
| expire < key> < seconds> | 为键值设置过期时间,单位为秒                        |
| ttl < key>              | 查看某个键的过期时间，-1表示永不过期，-2表示已过期 |
| dbsize                   | 查看当前数据库的Key的数量                          |
| flushdb                  | 清空当前库                                         |
| flushall                 | 清空全部库                                         |



### String类型的常用操作命令

| 命令                                 | 备注                                                         |
| :----------------------------------- | :----------------------------------------------------------- |
| get < key>                           | 获取对应键的值                                               |
| set < key> < value>                  | 设置键值对                                                   |
| append < key> < value>               | 将给定的value值追加到原值的末尾                              |
| strlen < key>                        | 获取对应键的值的长度                                         |
| setnx < key> < value>                | 只有在Key不存在时设置Key的值                                 |
| incr < key>                          | 将Key的值加1，只能对数字值进行操作，如果初始值为空，新增值为1 |
| decr < key>                          | 将Key的值减1，只能对数字值进行操作，如果初始值为空，新增值为-1 |
| incrby < key> < 步长>                | 将Key的值以自定义步长值增加                                  |
| decrby < key> < 步长>                | 将Key的值以自定义步长值减少                                  |
| mset < k1> < v1> < k2> < v2>......   | 设置一个或多个键值对                                         |
| mget < kl> < k2> < k3>......         | 获取一个或多个键的值                                         |
| msetnx < k1> < v1> < k2> < v2>...... | 所有的键Key不存在时，设置一个或多个键值对                    |
| getrange < key> < begin> < end>      | 获取值的范围                                                 |
| setrange < key> < begin> < value>    | 从起始位置开始，使用value覆写键Key中的字符串值               |
| setex < key> < second> < value>      | 设置键值的同时设置过期时间                                   |
| getset < key> < value>               | 设置新值的同时获得旧值                                       |



### List类型的常用操作命令

| 命令                                                | 备注                               |
| :-------------------------------------------------- | :--------------------------------- |
| Ipush/rpush < k1> < v1> < k2>< v2>......            | 从左边/右边插入一个或多个值        |
| Ipop/rpop < key>                                    | 从左边/右边吐出一个值              |
| rpoplpush < key1> < key2>                           | 从列表右边吐出一个值,插到列表左边  |
| Irange < key> < start> < stop>                      | 按照索引下标范围获得元素(从左到右) |
| lindex < key> < index>                              | 按照索引下标获得元素(从左到右)     |
| llen < key>                                         | 获得列表长度                       |
| linsert < key> before \| after < value> < newvalue> | 在的前面或后面插入                 |
| Irem < key> < n> < value>                           | 从左边删除n个value (从左到右)      |



### Set类型的常用操作命令

| 命令                          | 备注                                                         |
| :---------------------------- | :----------------------------------------------------------- |
| sadd < key> < v1> < v2>...... | 将一个或多个元素加入到集合key中,已经存在于集合的元素将被忽略 |
| smembers < key>               | 取出该集合的所有值                                           |
| sismember < key> < value>     | 判断集合key是否含有该值,有则返回1,没有则返回0                |
| scard < key>                  | 返回该集合的元素个数                                         |
| srem < key> < v1> < v2>...... | 删除集合中的某个元素                                         |
| spop < key>                   | 随机从该集合中吐出一个值                                     |
| srandmember < key> < n>       | 随机从该集合中取出n个值，取出的值不会被删除                  |
| sinter < key1> < key2>        | 返回两个集合的交集元素                                       |
| sunion < key1> < key2>        | 返回两个集合的并集元素                                       |
| sdiff < key1> < key2>         | 返回两个集合的差集元素                                       |



### Hash类型的常用操作命令

| 命令                                      | 备注                                                         |
| :---------------------------------------- | :----------------------------------------------------------- |
| hset < key> < field> < value>             | 给集合中的field键赋值value                                   |
| hget < key1> < field>                     | 获取集合中field键对应的值                                    |
| hmset < k1> < f1> < v1> < f2> < v2>...... | 批量设置集合中的键值对                                       |
| hexists key < field>                      | 判断哈希表中给定field键是否存在                              |
| hkeys < key>                              | 列出该集合的所有field                                        |
| hvals < key>                              | 列出该集合的所有value                                        |
| hincrby < key> < field> < increment>      | 为哈希表中的field键对应的值加上increment值                   |
| hsetnx < key> < field> < value>           | 当且仅当field键不存在时，将哈希表中的field键对应的值设置为value |



### Zset类型的常用操作命令

| 命令                                                         | 备注                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| zadd < key> < s1> < v1> < s2>< v2>......                     | 将一个或多个元素及其评分值加入到有序集合中                   |
| zrange < key> < start> < stop> [withscores]                  | 返回有序集合中下标在start和stop之间的元素,带withscores,可以让分数和值一起返回到结果集 |
| zrangebyscore key min max [withscores] [limit offset count]  | 返回有序集合中score值介于min和max之间的所有成员。有序集合成员按score值递增的次序排列 |
| zrevrangebyscore key max min [withscores] [limit offset count] | 返回有序集合中score值介于min和max之间的所有成员。有序集合成员按score值递减的次序排列 |
| zincrby < key> < increment> < value>                         | 为有序集合中的元素的score值加上指定数值                      |
| zrem < key> < value>                                         | 删除有序集合下的指定值                                       |
| zcount < key> < min> < max>                                  | 统计有序集合分数区间内的元素个数                             |
| zrank < key> < value>                                        | 返回该值在集合中的排名，从0开始                              |



### Jedis 工具常用API

| 命令                  | 备注                                                         |
| :-------------------- | :----------------------------------------------------------- |
| new Jedis(host,port)  | 创建Jedis对象，其中host为Redis服务器地址，port为Redis服务端口 |
| set(key,value)        | 设置序符串类型的数据                                         |
| get(key)              | 获取字符串类型的数据                                         |
| hset(key,field,value) | 设置合希类型的数据                                           |
| hget(key,field)       | 获取哈希类型的数据                                           |
| Ipush (key,field)     | 设置列表类型的数据                                           |
| lpop(key)             | 从列表左边弹栈                                               |
| rpop(key)             | 从列表右边弹栈                                               |
| del(key)              | 删除指定的键                                                 |


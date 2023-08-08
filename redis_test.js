// 引入ioredis库
const Redis = require('ioredis');

// 创建Redis客户端实例
const redis = new Redis();

// 测试增删改查
async function read(key) {
    try {
        const value = await redis.get(key);
        return value;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

module.exports = {
    read: read
}
<?php

namespace addons\shop\model;

use think\Model;

/**
 * 模型
 */
class Region extends Model
{

    // 表名
    protected $name = 'shop_region';
    // 开启自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';
    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = '';
    // 追加属性
    protected $append = [
    ];
}

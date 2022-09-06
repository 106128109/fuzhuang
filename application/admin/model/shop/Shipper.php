<?php

namespace app\admin\model\shop;

use think\Model;


class Shipper extends Model
{


    // 表名
    protected $name = 'shop_shipper';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [

    ];


}

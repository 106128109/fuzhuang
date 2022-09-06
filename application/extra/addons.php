<?php

return [
    'autoload' => false,
    'hooks' => [
        'app_init' => [
            'epay',
            'shop',
        ],
        'upgrade' => [
            'shop',
        ],
        'view_filter' => [
            'shop',
            'third',
        ],
        'user_sidenav_after' => [
            'shop',
            'signin',
        ],
        'sms_send' => [
            'smsbao',
        ],
        'sms_notice' => [
            'smsbao',
        ],
        'sms_check' => [
            'smsbao',
        ],
        'config_init' => [
            'summernote',
            'third',
        ],
        'user_delete_successed' => [
            'third',
        ],
        'user_logout_successed' => [
            'third',
        ],
        'module_init' => [
            'third',
        ],
        'action_begin' => [
            'third',
        ],
    ],
    'route' => [
        '/$' => 'shop/index/index',
        '/shop/a/[:id]' => 'shop/goods/index',
        '/shop/p/[:diyname]' => 'shop/page/index',
        '/shop/s' => 'shop/search/index',
        '/shop/c/[:diyname]' => 'shop/category/index',
        '/shop/coupon/[:coupon]' => 'shop/coupon/show',
        '/shop/coupon' => 'shop/coupon/index',
        '/shop/exchange/[:id]' => 'shop/exchange/show',
        '/shop/exchange' => 'shop/exchange/index',
        '/third$' => 'third/index/index',
        '/third/connect/[:platform]' => 'third/index/connect',
        '/third/callback/[:platform]' => 'third/index/callback',
        '/third/bind/[:platform]' => 'third/index/bind',
        '/third/unbind/[:platform]' => 'third/index/unbind',
    ],
    'priority' => [],
    'domain' => '',
];

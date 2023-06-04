<?php


namespace App\Classes;


class helpers
{

    public static function addClassesToToasterMessage($text, $classes)
    {
        return '<p class="' . $classes . '">' . $text . '</p>';
    }


    public static function preparedJsonResponseWithMessage($status, $text, $options = [])
    {
        return response()->json([
            'status' => $status,
            'message' => $text !== '' ? helpers::addClassesToToasterMessage($text, 'font-iransans') : '',
            'options' => $options
        ]);
    }
}

<?php

// for success response
function jsonOutput($message ='test', $data = [], $key = '')
{
    $statusCode = 200;
    $final_output = [];
    $final_output['status'] = 'success';
    $final_output['message'] = $message;
    $final_output['data'] = $data;
    $final_output['key'] = $key;

    http_response_code($statusCode);
    echo json_encode($final_output);
    exit();
}

// for error response
function jsonOutputError($message, $data = [], $key = '')
{
    $statusCode = 404;
    $final_output = [];
    $final_output['status'] = 'error';
    $final_output['message'] = $message;
    $final_output['data'] = $data;
    $final_output['key'] = $key;

    http_response_code($statusCode);
    echo json_encode($final_output);
    exit();
}

function prepareResult($status = 'success', $message = 'missing message', $data = [], $info = NULL )
{
    $result['status'] = $status;
    $result['message'] = $message;

    if(!empty($data)) {
        $result['data'] = $data;
    };

    if(!is_null($info)) {
        $result['info'] = $info;
    };

    return $result;
}
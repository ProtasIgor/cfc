<?php
$json = file_get_contents('php://input');
$data = json_decode($json);
	$queryParams = [
		'fields' => [
			'TITLE' => 'Заявка с finance.creditbel.com',
			'SOURCE_ID' => '4',
			'PHONE' => [['VALUE' => $data->phone, 'VALUE_TYPE' => 'WORK']],
			'NAME' => $data->name,
			'UF_CRM_1698748356' => $data->credit_term,
			'UF_CRM_1698750065' => $data->{"credit-sum"},
			'UF_CRM_1698751839' => $data->work_term,
			'UF_CRM_1698753182' => $data->income,
			'UF_CRM_1698765637' => $data->messenger
		],
		'params' => ['REGISTER_SONET_EVENT' => 'Y'], // уведомить о лиде
	];
	$params = json_encode($queryParams);

	$url = 'https://cfc.bitrix24.by/rest/1/zqb8cpawqxlsm9sm/crm.lead.add.json';

	$ch = curl_init($url);

	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type:application/json'] );
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_TIMEOUT, 10);
	curl_setopt($ch, CURLOPT_FAILONERROR, 1);
	curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $params);

	$content = curl_exec($ch);

	$err = curl_errno($ch);
	$errmsg = curl_error($ch);
	$header = curl_getinfo($ch);

	curl_close($ch);

echo json_encode(['status' => 'ok', 'data-income' => $data->income]);
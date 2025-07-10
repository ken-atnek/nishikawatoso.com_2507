<?php
/*=======================================
* お問い合せフォーム
* URL:public/backend/contact.php
* Referenced in: /page.tsx,
* Created: 2025-06-09
* Last updated: 2025-06-09
* ======================================= */


header("Access-Control-Allow-Origin: *"); // CORS対策
header("Content-Type: application/json");

// フォームデータを受け取る
if ($_SERVER["REQUEST_METHOD"] === "POST") {
	$name = isset($_POST["name"]) ? trim($_POST["name"]) : "";
	$email = isset($_POST["email"]) ? trim($_POST["email"]) : "";
	$phone = isset($_POST["phone"]) ? trim($_POST["phone"]) : "";
	$post = isset($_POST["post"]) ? trim($_POST["post"]) : "";
	$prefecture = isset($_POST["prefecture"]) ? trim($_POST["prefecture"]) : "";
	$city = isset($_POST["city"]) ? trim($_POST["city"]) : "";
	$address = isset($_POST["address"]) ? trim($_POST["address"]) : "";
	$building = isset($_POST["building"]) ? trim($_POST["building"]) : "";
	$message = isset($_POST["message"]) ? trim($_POST["message"]) : "";
	if (empty($name) || empty($email) || empty($phone) || empty($post) || empty($prefecture) || empty($city) || empty($message)) {
		echo json_encode(["success" => false, "error" => "必須項目を入力してください"]);
		exit;
	}

	// 📩 **メールの設定**
	$to = "ken.atnek@gmail.com";
	// $to = "spa85cx9@watch.ocn.ne.jp";
	$to_name = "西川塗装";
	$send_date = date("Y/n/j-H:i", time());
	$from_name = "西川塗装 お問い合わせ";
	$from_email = "contact@demo-nishikawatoso.tuna-pic.co.jp";  //
	// **エンコーディング設定**
	$orgEncoding = mb_internal_encoding();
	mb_language("uni");
	mb_internal_encoding('UTF-8');

	// **ヘッダー作成**
	// $header_from = 'From: "' . mb_encode_mimeheader($name, 'ISO-2022-JP') . '" <no-reply@demo-nishikawatoso.tuna-pic.co.jp>' . "\r\n";
	// $header_from .= 'Reply-To: ' . $email;

	$header_from = 'From: "' . mb_encode_mimeheader($from_name, 'ISO-2022-JP') . '" <' . $from_email . '>' . "\r\n";
	$header_from .= 'Reply-To: ' . $email;


	// **メール本文**
	$subject = 'お問い合せがありました';
	$mail_body  = "お問い合わせフォームより\n";
	$mail_body .= "--------------------\n";
	$mail_body .= "■お名前\n{$name} 様\n";
	$mail_body .= "◎お電話番号\n{$phone}\n";
	$mail_body .= "--------------------\n";
	$mail_body .= "◎メールアドレス\n{$email}\n";
	$mail_body .= "◎住所\n";
	$mail_body .= "〒{$post}\n";
	$mail_body .= "{$prefecture} {$city} {$address} {$building}\n";
	$mail_body .= "--------------------\n";

	$mail_body .= "【お問い合わせ内容】\n{$message}\n\n";
	$mail_body .= "--------------------\n";
	$mail_body .= $send_date . "\n";
	$mail_body  = str_replace("\r\n", "\n", $mail_body);

	// **宛先**
	$to_name = mb_encode_mimeheader($to_name, 'ISO-2022-JP');
	$send_target = $to_name . ' <' . $to . '>';

	// **送信**
	$rslt = mb_send_mail($send_target, $subject, $mail_body, $header_from, "-f$from_email");
	// **エンコーディングを元に戻す**
	mb_internal_encoding($orgEncoding);

	// **送信結果を適切に出力**
	if ($rslt) {
		echo json_encode(["success" => true, "message" => "メール送信成功！"]);
	} else {
		echo json_encode(["success" => false, "error01" => "メール送信に失敗しました"]);
	}
} else {
	echo json_encode(["success" => false, "error02" => "無効なリクエスト"]);
}

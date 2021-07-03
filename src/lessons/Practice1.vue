<template>
		<table border="1" width="100%" style="height:100%;">
			<tr id="tool" height="10%">
				<td colspan="2">
					<p valign="top">
						○ツールバー
					</p>
					<form>
						&nbsp;
						<input type="button" id="sample" value="サンプル入力">
						&nbsp;
						<input type="button" id="clear" value="入力クリア"><br/>&nbsp;
					</form>
				</td>
			</tr>
			<tr id="input" height="60%">
				<td width="50%">
					<p valign="top">
						○入力情報
					</p>
					<form>
						<table name="data" align="center" width="90%" style="boxsizing:border-box">
							<tr>
								<td>
									氏名:
								</td>
								<td>
									<input type="text" id="name" style="width:100%; box-sizing:border-box">
								</td>
							</tr>
							<tr>
								<td>
									性別:
								</td>
								<td>
									<input type="radio" name="gender" id="male">男性&nbsp;
									<input type="radio" name="gender" id="female">女性
								</td>
							</tr>
							<tr>
								<td>血液型:
								</td>
								<td><select name="blood" id="blood">
										<option value="A">A型</option>
										<option value="B">B型</option>
										<option value="O">O型</option>
										<option value="AB">AB型</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>
									生年月日:
								</td>
								<td>
									<input type="text" name="year" id="year" size="4">年
									<input type="text" name="month" id="month" size="2">月
									<input type="text" name="day" id="day" size="2">日
								</td>
							</tr>
							<tr>
								<td>
									住所:
								</td>
								<td>
									<input type="text" name="addres" id="addres" style="width:100%; box-sizing:border-box">
									</td>
							</tr>
							<tr>
								<td valign="top">
									応募理由:
								</td>
								<td>
									<textarea name="reason" id="reason" rows="4" style="width:100%; box-sizing:border-box"></textarea><br/>
									※全角200字以内

								</td>
							</tr>
						</table>
					</form>
				</td>
				<td width="50%">
					<form>
						<table name="data" align="center" width="90%">
							<tr>
								<td colspan="2">
									当キャンペーンを知った理由<br/>
									(※未入力不可、複数選択可)
								</td>
							</tr>
							<tr>
								<td>
									Webで
								</td>
								<td>
									<input type="checkbox" name="checkbox" value="Webで">
								</td>
							</tr>
							<tr>
								<td>
									中吊り広告で
								</td>
								<td>
									<input type="checkbox" name="checkbox" value="中吊り広告で">
								</td>
							</tr>
							<tr>
								<td>
									ポスターで
								</td>
								<td>
									<input type="checkbox" name="checkbox" value="ポスターで">
								</td>
							</tr>
							<tr>
								<td>
									ダイレクトメールで
								</td>
								<td>
									<input type="checkbox" name="checkbox" value="ダイレクトメールで">
								</td>
							</tr>
							<tr>
								<td>
									街頭販促PRで
								</td>
								<td>
									<input type="checkbox" name="checkbox" value="街頭販促PRで">
								</td>
							</tr>
							<tr>
								<td>
									ご家族からの紹介で
								</td>
								<td>
									<input type="checkbox" name="checkbox" value="ご家族からの紹介で">
								</td>
							</tr>
							<tr>
								<td>
									友人・知人の紹介で
								</td>
								<td>
									<input type="checkbox" name="checkbox" value="友人・知人の紹介で">
								</td>
							</tr>
							<tr>
								<td>
									その他
								</td>
								<td>
									<input type="checkbox" name="checkbox" value="その他">
								</td>
							</tr>
							<tr height="40px" valign="center">
								<td>
									<p id="know" style="color:white;">
										どこで知ったか？：
									</p>
								</td>
								<td>
									<input disabled="disabled" type="text" id="where">
								</td>
							</tr>
							<tr>
								<td>
									<input type="button" name="delcheck" id="delcheck" value="全てチェックを外す">
								</td>
								<td>
									<input type="button" name="allcheck" id="allcheck" value="全てチェックを付ける">
								</td>
							</tr>
							<tr>
								<td>
								</td>
								<td align="right">
									<input type="button" name="regist" id="regist" value="登録">
								</td>
							</tr>
						</table>
					</form>
				</td>
			</tr>
			<tr id="messagebox" height="20%" valign="top">
				<td colspan="2">
					<div style="height:100px;overflow-y:auto;">
						<p id="messagetitle">
							○メッセージ
						</p>
						<table name="message" id="message" border="1" width="90%" align="center">
							<tr>
								<th width="5%">
									No
								</th>
								<th width="15%">
									メッセージ種別
								</th>
								<th width="15%">
									エラー箇所
								</th>
								<th width="65%">
									メッセージ内容
								</th>
							</tr>
						</table>
					</div>
				</td>
			</tr>
		</table>
</template>
<script>
export default {
}
</script>

/* =======================================
 * 西川塗装 お問い合わせ
 * URL: src/components/DetailForm.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-10
 * Last updated: 2025-07-10
 * ======================================= */
'use client';
import React, { useState, useRef } from 'react';
import Modal from '@/components/Modal';
import styles from '@/styles/components/DetailForm.module.scss';
const DetailForm = () => {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false); // 確認画面フラグ
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダル制御

  const [post, setPost] = useState('');
  const [prefecture, setPrefecture] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [building, setBuilding] = useState('');

  const topRef = useRef<HTMLDivElement | null>(null);

  // **確認ボタンの処理**
  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!Name || !email || !phone || !message) {
      setStatus('必須項目を入力してください');
      return;
    }

    setIsConfirming(true); // 確認画面へ
    setStatus('');
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  // **修正ボタンの処理（入力画面に戻る）**
  const handleEdit = () => {
    setIsConfirming(false);
  };

  // **送信処理**
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', Name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);
    formData.append('post', post);
    formData.append('prefecture', prefecture);
    formData.append('city', city);
    formData.append('address', address);
    formData.append('building', building);

    try {
      const response = await fetch(
        'http://demo-nishikawatoso.tuna-pic.co.jp/backend/contact.php',
        {
          method: 'POST',
          body: formData,
        }
      );

      const result = await response.json();
      // console.log('サーバーレスポンス:', result);

      if (result.success) {
        setStatus('');
        setIsModalOpen(true); // モーダルを開く
        setTimeout(() => setIsModalOpen(false), 3000); // 3秒後に自動閉じる
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setPost('');
        setPrefecture('');
        setCity('');
        setAddress('');
        setBuilding('');
        setIsConfirming(false); // 入力画面に戻す
      } else {
        setStatus(result.error || '送信に失敗しました。');
      }
    } catch (error) {
      console.error('エラー:', error);
      setStatus('エラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className={styles.wrapDetails}>
        <h3>お問い合わせ</h3>
        <div className={styles.itemDetail}>
          <form
            className={styles.blockForm}
            onSubmit={isConfirming ? handleSubmit : handleConfirm}
          >
            {isConfirming ? (
              // ✅ 確認画面
              <div className={styles.statusConfirm}>
                <p>入力内容を確認してください。</p>
                <dl>
                  <dt>お名前</dt>
                  <dd>
                    <div>{Name}</div>
                  </dd>
                </dl>
                <dl>
                  <dt>お電話番号</dt>
                  <dd>
                    <div>{phone}</div>
                  </dd>
                </dl>
                <dl>
                  <dt>メールアドレス</dt>
                  <dd>
                    <div>{email}</div>
                  </dd>
                </dl>
                <dl>
                  <dt>住所</dt>
                  <dd>
                    <div>〒{post}</div>
                    <div>{prefecture}</div>
                    <div>{city}</div>
                    <div>{address}</div>
                    <div>{building}</div>
                  </dd>
                </dl>
                <div className={styles.boxMessage}>{message}</div>
                <div className={styles.box_btn}>
                  <button type="button" onClick={handleEdit}>
                    修正する
                  </button>
                  <button type="submit" disabled={loading}>
                    {loading ? '送信中…' : '送信'}
                  </button>
                </div>
              </div>
            ) : (
              // ✅ 入力画面
              <div className={styles.blockFormInner}>
                <dl>
                  <dt className={styles.formRequired}>お名前</dt>
                  <dd>
                    <input
                      type="text"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="お名前"
                    />
                  </dd>
                </dl>
                <dl>
                  <dt className={styles.formRequired}>お電話番号</dt>
                  <dd>
                    <input
                      type="text"
                      inputMode="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="お電話番号"
                    />
                  </dd>
                </dl>
                <dl>
                  <dt className={styles.formRequired}>メールアドレス</dt>
                  <dd>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="メールアドレス"
                    />
                  </dd>
                </dl>
                <dl className={styles.formAddress}>
                  <dt className={styles.formRequired}>住所</dt>
                  <dd>
                    <div className={styles.postNumber}>
                      <span>郵便番号</span>
                      <input
                        type="text"
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                        placeholder="郵便番号"
                        required
                      />
                    </div>
                    <div className={styles.prefecture}>
                      <span>都道府県</span>
                      <select
                        value={prefecture}
                        onChange={(e) => setPrefecture(e.target.value)}
                        required
                      >
                        <option value="">選択してください</option>
                        <option value="北海道">北海道</option>
                        <option value="青森県">青森県</option>
                        <option value="岩手県">岩手県</option>
                        <option value="宮城県">宮城県</option>
                        <option value="秋田県">秋田県</option>
                        <option value="山形県">山形県</option>
                        <option value="福島県">福島県</option>
                        <option value="茨城県">茨城県</option>
                        <option value="栃木県">栃木県</option>
                        <option value="群馬県">群馬県</option>
                        <option value="埼玉県">埼玉県</option>
                        <option value="千葉県">千葉県</option>
                        <option value="東京都">東京都</option>
                        <option value="神奈川県">神奈川県</option>
                        <option value="新潟県">新潟県</option>
                        <option value="富山県">富山県</option>
                        <option value="石川県">石川県</option>
                        <option value="福井県">福井県</option>
                        <option value="山梨県">山梨県</option>
                        <option value="長野県">長野県</option>
                        <option value="岐阜県">岐阜県</option>
                        <option value="静岡県">静岡県</option>
                        <option value="愛知県">愛知県</option>
                        <option value="三重県">三重県</option>
                        <option value="滋賀県">滋賀県</option>
                        <option value="京都府">京都府</option>
                        <option value="大阪府">大阪府</option>
                        <option value="兵庫県">兵庫県</option>
                        <option value="奈良県">奈良県</option>
                        <option value="和歌山県">和歌山県</option>
                        <option value="鳥取県">鳥取県</option>
                        <option value="島根県">島根県</option>
                        <option value="岡山県">岡山県</option>
                        <option value="広島県">広島県</option>
                        <option value="山口県">山口県</option>
                        <option value="徳島県">徳島県</option>
                        <option value="香川県">香川県</option>
                        <option value="愛媛県">愛媛県</option>
                        <option value="高知県">高知県</option>
                        <option value="福岡県">福岡県</option>
                        <option value="佐賀県">佐賀県</option>
                        <option value="長崎県">長崎県</option>
                        <option value="熊本県">熊本県</option>
                        <option value="大分県">大分県</option>
                        <option value="宮崎県">宮崎県</option>
                        <option value="鹿児島県">鹿児島県</option>
                        <option value="沖縄県">沖縄県</option>
                      </select>
                    </div>
                    <div>
                      <span>市町村</span>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="市町村"
                        required
                      />
                    </div>
                    <div>
                      <span>町名・番地</span>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="町名・番地"
                      />
                    </div>
                    <div>
                      <span>建物名</span>
                      <input
                        type="text"
                        value={building}
                        onChange={(e) => setBuilding(e.target.value)}
                        placeholder="建物名"
                      />
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt className={styles.formRequired}>お問い合わせ内容</dt>
                  <dd>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="お問い合わせ内容を入力してください"
                    />
                  </dd>
                </dl>
                <div className={styles.box_btn}>
                  <button type="submit">確 認</button>
                </div>
              </div>
            )}
            <p>{status}</p>
          </form>
        </div>
      </div>
      {/* ✅ モーダル表示 */}
      {isModalOpen && (
        <Modal
          message="お問い合わせが送信されました。"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default DetailForm;

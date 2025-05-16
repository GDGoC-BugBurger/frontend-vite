'use client';

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Next.js router 대신 React Router 사용
import axios from 'axios';
import './LoginScreen.css';
import { backUrl } from '../../utils/constant'; // API 엔드포인트 설정

const LoginScreen: React.FC = () => {
  const navigate = useNavigate(); // useRouter 대신 useNavigate 사용
  const [username, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${backUrl}/api/v1/members/sign-in`, {
        username,
        password,
      });

      if (response.status === 200 && response.data.success) {
        navigate('/chat'); // router.push 대신 navigate 사용
      } else {
        setError("아이디 또는 비밀번호가 올바르지 않습니다.");
      }
    } catch (err) {
      setError("서버 오류가 발생했습니다. 다시 시도해주세요.");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">로그인</h1>
      <p className="login-subtitle"> </p>

      <input
        type="text"
        value={username}
        onChange={(e) => setUserId(e.target.value)}
        className="input-field"
        placeholder="아이디"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
        placeholder="비밀번호"
      />

      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={saveInfo}
            onChange={() => setSaveInfo(!saveInfo)}
          />
          정보 저장
        </label>
        <label>
          <input
            type="checkbox"
            checked={autoLogin}
            onChange={() => setAutoLogin(!autoLogin)}
          />
          자동 로그인
        </label>
      </div>

      <button onClick={handleLogin} className="login-button">
        로그인
      </button>

      {error && <p className="error-message">{error}</p>}

      <div className="help-links">
        <a href="#">아이디 찾기</a>
        <a href="#">비밀번호 찾기</a>
        <a href="#">계정이 없으신가요? 회원가입</a>
        <a href="#">도움이 필요하신가요? 고객센터</a>
      </div>
    </div>
  );
};

export default LoginScreen;

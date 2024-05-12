import { useState } from 'react';
import './index.css';

export const Record = () => {
  const [studyTitle, setStudyTitle] = useState('');
  const [studyTime, setStudyTime] = useState(0);
  const [records, setRecords] = useState([]);
  const isBlankError = studyTitle.trim() === '' || studyTime <= 0;

  const onClickTitle = (e) => setStudyTitle(e.target.value);
  const onClickTime = (e) => setStudyTime(parseInt(e.target.value, 10));

  const onClickAdd = () => {
    const newRecord = { title: studyTitle, time: studyTime };
    setRecords([...records, newRecord]);
    setStudyTitle('');
    setStudyTime(0);
  };

  const sumStudyTime = records.reduce((sum, current) => sum + current.time, 0);

  return (
    <>
      <h1>学習記録一覧</h1>
      <div className="input-container">
        <div className="input-box">
          <p>学習内容</p>
          <input type="text" value={studyTitle} onChange={onClickTitle} />
        </div>
        <div className="input-box">
          <p>学習時間</p>
          <input
            type="number"
            value={studyTime}
            onChange={onClickTime}
            min="0"
          />
        </div>
      </div>
      <div>
        <p>入力されている学習内容：{studyTitle}</p>
        <p>入力されている学習時間：{studyTime}時間</p>
        <button onClick={onClickAdd}>登録</button>
        {isBlankError && (
          <p className="error-message">入力されていない項目があります。</p>
        )}
        <p>合計時間 {sumStudyTime} / 1000 (h)</p>
      </div>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            <p>{`${record.title} ${record.time}時間`}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

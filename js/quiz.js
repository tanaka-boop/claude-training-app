// ========================================
// Claude 研修アプリ - クイズ機能
// ========================================

class QuizEngine {
  constructor(questions, containerId, onComplete) {
    this.questions = questions;
    this.containerId = containerId;
    this.onComplete = onComplete;
    this.currentIndex = 0;
    this.answers = new Array(questions.length).fill(null);
    this.answered = new Array(questions.length).fill(false);
    this.retryMode = false;
    this.retryIndices = [];
  }

  render() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    const q = this.questions[this.currentIndex];
    const markers = ['A', 'B', 'C', 'D'];
    const isAnswered = this.answered[this.currentIndex];
    const userAnswer = this.answers[this.currentIndex];
    const isCorrect = isAnswered && userAnswer === q.correct;

    container.innerHTML = `
      <div class="quiz-container fade-in">
        <div class="quiz-header">
          <h2>${this.retryMode ? '復習モード' : '確認クイズ'}</h2>
          <span class="quiz-progress-text">${this.retryMode
            ? `${this.retryIndices.indexOf(this.currentIndex) + 1} / ${this.retryIndices.length}`
            : `${this.currentIndex + 1} / ${this.questions.length}`
          }</span>
        </div>

        <div class="quiz-question">
          <div class="q-number">問題 ${this.currentIndex + 1}${q.moduleName ? ` <span style="color:var(--text-muted);font-weight:400">（${q.moduleName}）</span>` : ''}</div>
          <div class="q-text">${q.question}</div>

          <div class="quiz-options">
            ${q.options.map((opt, i) => `
              <div class="quiz-option ${this.getOptionClass(i)}" data-index="${i}">
                <span class="option-marker">${markers[i]}</span>
                <span class="option-text">${opt}</span>
                ${isAnswered && this.getOptionFeedback(i) ? `<div class="option-feedback ${i === q.correct ? 'correct' : 'incorrect'}">${this.getOptionFeedback(i)}</div>` : ''}
              </div>
            `).join('')}
          </div>

          ${isAnswered ? `
            <div class="quiz-explanation show" id="quiz-explanation">
              <div class="quiz-result-inline ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? '⭕ 正解！' : '❌ 不正解'}
              </div>
              ${q.explanation}
            </div>
          ` : ''}
        </div>

        <div class="quiz-actions">
          ${this.getPrevButton()}
          ${this.getNextButton()}
        </div>
      </div>
    `;

    this.attachEvents(container);
  }

  getPrevButton() {
    if (this.retryMode) {
      const idx = this.retryIndices.indexOf(this.currentIndex);
      return idx > 0 ? '<button class="btn btn-secondary" id="quiz-prev">前の問題</button>' : '';
    }
    return this.currentIndex > 0 ? '<button class="btn btn-secondary" id="quiz-prev">前の問題</button>' : '';
  }

  getNextButton() {
    if (!this.answered[this.currentIndex]) {
      return `<button class="btn btn-primary" id="quiz-check" ${this.answers[this.currentIndex] === null ? 'disabled' : ''}>回答する</button>`;
    }
    if (this.retryMode) {
      const idx = this.retryIndices.indexOf(this.currentIndex);
      return idx < this.retryIndices.length - 1
        ? '<button class="btn btn-primary" id="quiz-next">次の問題</button>'
        : '<button class="btn btn-primary" id="quiz-finish">結果を見る</button>';
    }
    return this.currentIndex < this.questions.length - 1
      ? '<button class="btn btn-primary" id="quiz-next">次の問題</button>'
      : '<button class="btn btn-primary" id="quiz-finish">結果を見る</button>';
  }

  getOptionClass(optionIndex) {
    if (!this.answered[this.currentIndex]) {
      return this.answers[this.currentIndex] === optionIndex ? 'selected' : '';
    }
    const q = this.questions[this.currentIndex];
    if (optionIndex === q.correct) return 'correct';
    if (this.answers[this.currentIndex] === optionIndex) return 'incorrect';
    return 'dimmed';
  }

  getOptionFeedback(optionIndex) {
    const q = this.questions[this.currentIndex];
    // Show feedback only for selected (wrong) option and correct option
    if (!q.optionFeedback) return '';
    if (optionIndex === q.correct) return q.optionFeedback[optionIndex] || '';
    if (this.answers[this.currentIndex] === optionIndex) return q.optionFeedback[optionIndex] || '';
    return '';
  }

  attachEvents(container) {
    // オプション選択
    container.querySelectorAll('.quiz-option').forEach(el => {
      el.addEventListener('click', () => {
        if (this.answered[this.currentIndex]) return;
        const idx = parseInt(el.dataset.index);
        this.answers[this.currentIndex] = idx;
        this.render();
      });
    });

    // 回答チェック
    const checkBtn = container.querySelector('#quiz-check');
    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        this.answered[this.currentIndex] = true;
        this.render();
      });
    }

    // 前へ
    const prevBtn = container.querySelector('#quiz-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.retryMode) {
          const idx = this.retryIndices.indexOf(this.currentIndex);
          if (idx > 0) this.currentIndex = this.retryIndices[idx - 1];
        } else {
          this.currentIndex--;
        }
        this.render();
      });
    }

    // 次へ
    const nextBtn = container.querySelector('#quiz-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.retryMode) {
          const idx = this.retryIndices.indexOf(this.currentIndex);
          if (idx < this.retryIndices.length - 1) this.currentIndex = this.retryIndices[idx + 1];
        } else {
          this.currentIndex++;
        }
        this.render();
      });
    }

    // 結果表示
    const finishBtn = container.querySelector('#quiz-finish');
    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        this.showResult();
      });
    }
  }

  getScore() {
    let correct = 0;
    this.questions.forEach((q, i) => {
      if (this.answers[i] === q.correct) correct++;
    });
    return correct;
  }

  getWrongIndices() {
    const wrong = [];
    this.questions.forEach((q, i) => {
      if (this.answers[i] !== q.correct) wrong.push(i);
    });
    return wrong;
  }

  showResult() {
    const container = document.getElementById(this.containerId);
    const score = this.getScore();
    const total = this.questions.length;
    const percentage = Math.round((score / total) * 100);
    const passed = percentage >= 80;
    const wrongIndices = this.getWrongIndices();

    // スコアに応じた結果メッセージ（E）
    let resultMessage = '';
    let resultIcon = '';
    let resultClass = '';

    if (percentage === 100) {
      resultIcon = '🎉';
      resultClass = 'perfect';
      resultMessage = `
        <h3>パーフェクト！</h3>
        <p class="result-message">全問正解です。素晴らしい理解度です！</p>
      `;
    } else if (percentage >= 80) {
      resultIcon = '✅';
      resultClass = 'pass';
      resultMessage = `
        <h3>合格です！</h3>
        <p class="result-message">しっかり理解できています。${wrongIndices.length > 0 ? `間違えた ${wrongIndices.length} 問を復習すると、さらに理解が深まります。` : ''}</p>
      `;
    } else if (percentage >= 60) {
      resultClass = 'almost';
      resultIcon = '📖';
      resultMessage = `
        <h3>あと少し！</h3>
        <p class="result-message">基本は理解できています。間違えた ${wrongIndices.length} 問を復習して、もう一度チャレンジしてみましょう。</p>
      `;
    } else {
      resultClass = 'fail';
      resultIcon = '💪';
      resultMessage = `
        <h3>もう一度学習しましょう</h3>
        <p class="result-message">学習コンテンツを見直してから再チャレンジしてください。焦らず、ひとつずつ理解していきましょう。</p>
      `;
    }

    // 間違えた問題の一覧（B）
    let wrongList = '';
    if (wrongIndices.length > 0) {
      wrongList = `
        <div class="wrong-summary">
          <h4>間違えた問題</h4>
          <ul>
            ${wrongIndices.map(i => `<li><span class="wrong-q-num">問${i + 1}</span> ${this.questions[i].question}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="quiz-container fade-in">
        <div class="quiz-result ${resultClass}">
          <div class="result-icon-emoji">${resultIcon}</div>
          ${resultMessage}
          <div class="result-score">
            ${total} 問中 ${score} 問正解（正答率 ${percentage}%）
          </div>
          <div class="result-bar-container">
            <div class="result-bar">
              <div class="result-bar-fill ${resultClass}" style="width:${percentage}%"></div>
            </div>
            <div class="result-bar-label">${percentage}%<span class="result-bar-threshold">合格ライン 80%</span></div>
          </div>
          ${wrongList}
          <div class="result-actions">
            ${wrongIndices.length > 0 ? '<button class="btn btn-primary" id="quiz-retry-wrong">間違えた問題だけやり直す</button>' : ''}
            <button class="btn btn-secondary" id="quiz-retry">最初からやり直す</button>
            ${passed && this.onComplete ? '<button class="btn btn-primary" id="quiz-complete">完了する</button>' : ''}
          </div>
        </div>
      </div>
    `;

    // 間違えた問題だけやり直す（B）
    container.querySelector('#quiz-retry-wrong')?.addEventListener('click', () => {
      this.retryMode = true;
      this.retryIndices = wrongIndices;
      wrongIndices.forEach(i => {
        this.answers[i] = null;
        this.answered[i] = false;
      });
      this.currentIndex = wrongIndices[0];
      this.render();
    });

    // 最初からやり直す
    container.querySelector('#quiz-retry')?.addEventListener('click', () => {
      this.retryMode = false;
      this.retryIndices = [];
      this.currentIndex = 0;
      this.answers = new Array(this.questions.length).fill(null);
      this.answered = new Array(this.questions.length).fill(false);
      this.render();
    });

    container.querySelector('#quiz-complete')?.addEventListener('click', () => {
      if (this.onComplete) this.onComplete(score, total);
    });

    // 80%以上なら自動でコールバック（修了テスト用）
    if (passed && this.onComplete) {
      this.onComplete(score, total);
    }
  }
}

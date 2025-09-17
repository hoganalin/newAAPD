 // 字數統計和動態位置功能
        const topicInput = document.getElementById('topicInput');
        const charCount = document.getElementById('charCount');
        const dynamicCounter = document.getElementById('dynamicCounter');
        const placeholderText = document.getElementById('placeholderText');
        
        // 創建隱藏的測量元素來計算文字寬度
        const measureElement = document.createElement('span');
        measureElement.style.position = 'absolute';
        measureElement.style.visibility = 'hidden';
        measureElement.style.whiteSpace = 'pre';
        measureElement.style.fontSize = '1.25rem'; // 與輸入框相同的字體大小
        measureElement.style.fontFamily = window.getComputedStyle(topicInput).fontFamily;
        document.body.appendChild(measureElement);
        
        topicInput.addEventListener('input', function() {
            const currentLength = this.value.length;
            charCount.textContent = currentLength;
            
            // 更新placeholder中的計數
            const counterText = placeholderText.querySelector('.counter-text');
            counterText.textContent = `(${currentLength}/15)`;
            
            if (this.value.trim() === '') {
                // 沒有輸入時，顯示自定義placeholder
                dynamicCounter.style.display = 'none';
                placeholderText.style.display = 'block';
            } else {
                // 有輸入時，顯示動態計數器並計算位置
                dynamicCounter.style.display = 'block';
                placeholderText.style.display = 'none';
                
                // 計算文字寬度
                measureElement.textContent = this.value;
                const textWidth = measureElement.offsetWidth;
                
                // 設置計數器位置（文字右側 + 一些間距）
                dynamicCounter.style.left = (textWidth + 16) + 'px'; // 16px 是輸入框的 padding
            }
            
            // 字數超過限制時變紅色
            if (currentLength >= 15) {
                charCount.style.color = '#dc3545';
            } else {
                charCount.style.color = '#AB8F65';
            }
        });
        
        // 處理輸入框焦點事件
        topicInput.addEventListener('focus', function() {
            if (this.value.trim() === '') {
                placeholderText.style.display = 'none';
            }
        });
        
        topicInput.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                placeholderText.style.display = 'block';
                dynamicCounter.style.display = 'none';
            }
        });
        
        // 表單提交處理
        document.querySelector('.btn-primary').addEventListener('click', function() {
            const topicValue = topicInput.value.trim();
            if (topicValue === '') {
                alert('請輸入話題內容！');
                return;
            }
            
            // 這裡可以加入實際的提交邏輯
            console.log('話題內容:', topicValue);
            alert('話題發布成功：' + topicValue);
        });
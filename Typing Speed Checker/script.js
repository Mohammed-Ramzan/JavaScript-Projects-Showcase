        const randomParas = [
            "She tried not to judge him. His ratty clothes and unkempt hair made him look homeless. Was he really the next Einstein as she had been told? On the off chance it was true, she continued to try not to judge him. It was a mood. She did not sit there inwardly upbraiding her husband, lamenting at Fate, which had directed her footsteps to the path which they had taken. She was just having a good cry all to herself.",
            "The day had begun on a bright note. The sun finally peeked through the rain for the first time in a week, and the birds were singing in its warmth. There was no way to anticipate what was about to happen.",
            "His parents continued to question him. He didn't know what to say to them since they refused to believe the truth. He explained again and again, and they dismissed his explanation as a figment of his imagination.",
            "Set Clear Goals: Clearly define what you want to achieve. Set specific, measurable, attainable, relevant, and time-bound (SMART) goals. When you have a clear direction, it becomes easier to stay motivated. Break It Down: Divide your goals into smaller, manageable tasks. This allows you to focus on one step at a time, which can make your goals feel more achievable and less overwhelming. Find Your Why: Understand why your goals are important to you. Connect with the deeper reasons behind your aspirations. When you have a strong emotional attachment to your goals, you're more likely to stay motivated.",
            "Create a Plan: Develop a detailed plan of action that outlines the steps you need to take to reach your goals. Having a roadmap can provide structure and help you stay on track. Celebrate Progress: Acknowledge and celebrate your accomplishments along the way. Recognize the milestones you achieve, regardless of their size. This positive reinforcement can boost your motivation and provide a sense of accomplishment. Seek Inspiration: Surround yourself with sources of inspiration and motivation. Read books, listen to podcasts, watch videos, or connect with individuals who have achieved what you aspire to do. Their stories and insights can fuel your motivation.",
            "Overcome Obstacles: Expect challenges and setbacks along the way. Instead of letting them discourage you, see them as opportunities for growth and learning. Develop strategies to overcome obstacles and adapt to changes as they arise. Find Support: Share your goals and aspirations with supportive friends, family, or mentors. Having a support system can provide encouragement, accountability, and valuable advice when you need it. Take Care of Yourself: Ensure you're taking care of your physical and mental well-being. Get enough sleep, eat nutritious meals, engage in regular physical activity, and practice stress-management techniques. When you feel good physically and mentally, it can enhance your motivation. Stay Focused: Minimize distractions and create an environment that supports your goals. Remove or reduce any temptations or interruptions that might hinder your progress. Prioritize your tasks and allocate dedicated time for working towards your goals."
        ];

        const para = document.querySelector(".para");
        const time = document.querySelector(".time span");
        const inp = document.querySelector(".container .input-field");
        const mistakeTag = document.querySelector(".mistake span");
        const cpmTag = document.querySelector(".cpm span");
        const wpmTag = document.querySelector(".wpm span");
        const tryAgainBtn = document.querySelector(".try-again");

        let timer;
        let charIndex = 0;
        let mistakes = 0;
        let maxTime = 60;
        let timeLeft = 60;
        let isTyping = false;

        function randomParagraph() {
            const paragraph = randomParas[Math.floor(Math.random() * randomParas.length)];
            para.innerHTML = paragraph.split("").map(char => `<span>${char}</span>`).join("");
            inp.focus();
            para.querySelectorAll("span")[0].classList.add("active")
        }

        function calculateWPM() {
  const typedText = inp.value.trim();
  const typedWords = typedText.split(/\s+/).filter(word => word !== "");
  const wordCount = typedWords.length;
  const elapsedTime = maxTime - timeLeft;
  const wpm = Math.round((wordCount / elapsedTime) * 60) || 0;
  return wpm;
}

        function initTyping() {
            const characters = para.querySelectorAll("span");
            const typeChar = inp.value.split("")[charIndex];

            if (charIndex < characters.length - 1 && timeLeft > 0) {
                if (!isTyping) {
                    timer = setInterval(timeFunc, 1000);
                    isTyping = true;
                }

                if (typeChar == null) {
                    charIndex--;
                    if (characters[charIndex].classList.contains("incorrect")) {
                        mistakes--;
                    }
                    characters[charIndex].classList.remove("correct", "incorrect");
                } else {
                    if (characters[charIndex].innerText === typeChar) {
                        characters[charIndex].classList.add("correct");
                    } else {
                        mistakes++;
                        characters[charIndex].classList.add("incorrect");
                    }
                    charIndex++;
                }

                characters.forEach(span => span.classList.remove("active"));
                characters[charIndex].classList.add("active");

                const wpm = calculateWPM();
                wpmTag.innerText = wpm;
                mistakeTag.innerText = mistakes;
                cpmTag.innerText = charIndex - mistakes;
            } else {
                inp.value = "";
                clearInterval(timer);
            }
        }

        function timeFunc() {
            if (timeLeft > 0) {
                timeLeft--;
                time.innerText = timeLeft;
            } else {
                clearInterval(timer);
            }
        }

        function resetGame() {
            location.reload();
        }

        randomParagraph();
        inp.addEventListener("input", initTyping);
        tryAgainBtn.addEventListener("click", resetGame);
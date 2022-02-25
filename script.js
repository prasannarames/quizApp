const correctAnswers = ['B', 'B', 'A', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswers.forEach((answer, index)=>{
        if(answer === correctAnswers[index]){
            score += 20;
        }
    });
    // console.log(score);
    //viewing result on the page
    scrollTo(0,0);
    // result.querySelector('span').textContent=`${score}%`;
    result.classList.remove('d-none');  

    // animating score
    let final = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent=`${final}%`;
        if(final === score){
            clearInterval(timer);
        } else {
            final++;
        }

    },10)

});
// اول ما اون چیزهایی که میخایم روشون فرایندهای پردازشی انجام بدیم رو قبل از هر چیزی سلکت کنیم و توی این همه توی این اچ تی ام الی که داریم همه چیز داخل فرم استپس در قدم اول خود فرم باید سلکت بشهو بعدش ایپوت هایی که اینجا داریم هر کدم جدا جدا سلکت بشن

const form = document.queryselector("#form");
const username = document.queryselector("#username");
const email = document.queryselector("#email");
const password = document.queryselector("#password");
const password2 = document.queryselector("#password2");

// برای اینکه وقتی روی باتن کلیک میشه فرایند ولیدیشن انجام بشه . ارگومان ایونت میدیم که از رفرش فرم جلوگیری بشه
form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();
});

//    ما باید 3 تا تابع داشته باشیم یدونش کار چک کردن ایپوتها رو انجام بده یدونه دیگه اگر ارروری بود اونو ست یا تنظیم کنه و یدونه هم تابع داشته باشیم برای زمانیکه همه چیز درست انجام شده یعنی بگم قسمت درست رو برای ما ست کنه تریم هم همان حذف فضاهای خالی است.
const checkInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "نام کاربری را وارد کنید");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "ایمیل را وارد کنید");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "رمز عبور را وارد کنید");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "تکرار رمز عبور را وارد کنید");
  } else if (passwordValue !== password2Value){
    setError(password2, "رمز عبور اشتباه وارد شده ");
}else {
    setSuccess(password2); 
  }
};

//   داخل اینها قرار هست براساس اینپوتی که داریم قرار هست یه پیغامی رو نمایش بده پس ما اینجا 2 تا ورودی میتونیم داشته باشیم .
const setError = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "form-control error";
  small.innerText = message;
};

const setSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

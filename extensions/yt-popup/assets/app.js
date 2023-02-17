function main() {
    console.log("this is log");

    console.log('====================================');
    localStorage.setItem("user", "this is user object");
    console.log("user object");
    console.log(localStorage.getItem("user"));
    console.log('====================================');
}

main()
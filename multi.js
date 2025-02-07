// calculate the multiplication table of a given number

function print_table(n, i = 1){
    if (i == 11)
        return;
    console.log(n + " * " + i + "=" + n * i);
    i++;
    print_table(n, i);
}
console.log(print_table(10));
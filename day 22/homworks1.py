def numbers(num1,num2):
    num1 = int(input("enter number: "))
    num2 = int(input("enter number: "))
    operate = input("Select math operation(+, -, *, /): ")
    if operate == "+":
        print(num1 + num2)
    elif operate == "-":
        print(num1 - num2)
    elif operate == "*":
        print(num1 * num2)
    elif operate == "/":
        print(num1 / num2)
    else:
        while operate != "+" "-" "*" "/":
            operate = input("Select math operation(+, -, *, /): ")
            if operate == "+":
                print(num1 + num2)
            elif operate == "-":
                print(num1 - num2)
            elif operate == "*":
                print(num1 * num2)
            elif operate == "/":
                print(num1 / num2) 



numbers(0,0)

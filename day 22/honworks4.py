def my_range():
    start = int(input("enter number: "))
    end = int(input("enter number: "))
    step = int(input("enter number: "))
    list = []
    for i in range(start,end,step):
        list.append(i)
        print(i)


    

my_range()
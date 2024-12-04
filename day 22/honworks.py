def numbers_product( start, end, step):
    list = []
    start
    while start < end:
        start = start + step
        list.append(start)
    print(list)
    new_list = []
    for num in list:
        if num %3 == 0:
            new_list.append(num)
    print(new_list)
    return numbers_product
    

numbers_product(6,20,1)




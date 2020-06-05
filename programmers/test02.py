# https://programmers.co.kr/learn/courses/30/lessons/42577?language=python3
phone_book = [119, 97674223, 1195524421]


def solution(phone_book):
    phone_book.sort()
    for a in range(len(phone_book) - 1):
        if phone_book[a] in phone_book[a+1]:
            return False
    return True


solution(phone_book)

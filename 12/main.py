import json

class Solution:

    def sum_number_in_string(self, number_string: str) -> int: # сумма цифр строки
        sum = 0
        number_string = number_string
        for element in number_string:
            sum += int(element)
        return sum
    # 
    def get_leader_string(self, i: int) -> str: # ступенчатая елка
        result = ""
        for index in range(i + 1):
            for j in range(i - index):
                result += " "
            for j in range(index):
                result += "#"
            result += "\n"
        return result
    #
    def to_json(self, func): # декоратор для различных функций
        def wrapped(*args, **kwargs):
            return json.dumps(func(*args, **kwargs))
        return wrapped
    #
    def get_spiral_number_matrix(self, i: int) -> str: # попытка реализовать матричной спирали
        result = ""
        
        a = [[0] * n for i in range(n)]  
        count = 0 
        for i in range(n): 
            count += 1
            a[0][i] = count
        j = 0  
        i = n-1
        n -= 1 
        while len(a)**2 != count:
            for k in range(n):
                j += 1
                count += 1
                a[j][i] = count 
            for k in range(n):
                i -= 1
                count += 1
                a[j][i] = count   
            for k in range(n-1):
                j -= 1
                count += 1
                a[j][i] = count
            for k in range(n-1):
                i += 1
                count += 1
                a[j][i] = count
            n -= 2  
        for i in range(len(a)):
            for j in range(len(a[i])):
                result+=a[i][j]
        return result
    #
if __name__ == '__main__': 

    solution = Solution()
    solution.sum_number_in_string('12345')
    solution.sum_number_in_string('160438521039')

    solution = Solution()
    print(solution.get_leader_string(3))
    print(solution.get_leader_string(5))

    @solution.to_json
    def get_data():
        return {
            'data': 42
        }
    get_data()

    solution = Solution()
    print(solution.get_spiral_number_matrix(5))
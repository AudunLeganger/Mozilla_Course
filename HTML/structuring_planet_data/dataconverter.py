from sys import argv

data = argv[1]
terms = data.split()
try:
    for i in range(10, len(terms)):
        terms[9] = terms[9] + " " + terms[i]

    while len(terms) > 10:
        terms.pop(10)
finally:
    f = open("converted_data.txt", "w")
    for term in terms:
        if term == terms[-1]:
            f.write(term)
        else:
            f.write(term + "\n")
    f.close()
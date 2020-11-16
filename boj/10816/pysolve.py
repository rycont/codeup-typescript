cards = list(map(int, input().split(" ")))
queries = list(map(int, input().split(" ")))
print(list(map(lambda query: len(list(filter(lambda card: query == card, cards))), queries)))
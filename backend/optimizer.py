def ind_cost(guess, actual):
    return max(abs(guess - actual), (86400 - abs(guess - actual)))

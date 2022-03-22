# Megarandom Chess
Shows start position for a game of chess with randomized starting positions and randomized board configurations. Inspired by [Fischer random chess (Chess960)](https://en.wikipedia.org/wiki/Fischer_random_chess) and the Age of Empires 2 random map script, ['Megarandom'](https://ageofempires.fandom.com/wiki/MegaRandom). 

Currently WIP, not ready for publication just yet :)

## Features

Includes support for different board sizes from 8 by 8 up to 10 by 10, fantasy chess pieces, pieces from other chess variants such as Shogi and Xiangqi and different board layouts including the river and palace from Xiangqi.

The user can select different options in the top bar if they wish to exclude/include various random elements. The user can also activate 'crazy mode', which makes the chances of random elements appearing much higher and will result in an even less predictable game board.  

### Game Rules Probabilities

Board Size: 70% 8 * 8, 15% 9 * 9, 15% 10 * 10

Pieces are randomized as follows:
-25% chance of each piece or pawn 'mutating' to another similar piece. Choice of mutated piece depends on how many different replacement pieces are available. Pawn equivalents will always start in a line in front of all the pieces
-Both bishop equivalents are placed on opposite colours first
-Rook equivalents are placed with at least one square between them, and the king is placed inbetween the rooks
-Remaining pieces are placed randomly
-On 9 * 9 boards, an extra knight or rook equivalent piece will be chosen randomly (50% of each)
-On 10 * 10 boards, there will be one extra knight or rook equivalent chosen as per the above procedure. For the 10th piece, there will be an equal chance of choosing an extra knight equivalent, rook equivalent, queen equivalent or an extra king (20% for each)

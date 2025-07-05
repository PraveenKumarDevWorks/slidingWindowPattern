## Step-by-step Example: Longest Substring Without Repeating Characters

**Input:** `"abcabcbb"`

We use a sliding window with two pointers (`start`, `end`) and a set to track unique characters.

| Step | Window (start-end) | Seen Set      | Current Char | Action                                    | maxLength |
|------|--------------------|---------------|--------------|-------------------------------------------|-----------|
| 1    | [0-0]              | {a}           | a            | Add 'a'                                   | 1         |
| 2    | [0-1]              | {a, b}        | b            | Add 'b'                                   | 2         |
| 3    | [0-2]              | {a, b, c}     | c            | Add 'c'                                   | 3         |
| 4    | [0-3]              | {a, b, c}     | a            | 'a' repeats, remove 'a', move start to 1  | 3         |
|      | [1-3]              | {b, c, a}     | a            | Add 'a'                                   | 3         |
| 5    | [1-4]              | {b, c, a}     | b            | 'b' repeats, remove 'b', move start to 2  | 3         |
|      | [2-4]              | {c, a, b}     | b            | Add 'b'                                   | 3         |
| 6    | [2-5]              | {c, a, b}     | c            | 'c' repeats, remove 'c', move start to 3  | 3         |
|      | [3-5]              | {a, b, c}     | c            | Add 'c'                                   | 3         |
| 7    | [3-6]              | {a, b, c}     | b            | 'b' repeats, remove 'a', move start to 4  | 3         |
|      | [4-6]              | {b, c}        | b            | Remove 'c', add 'b', move start to 5      | 3         |
|      | [5-6]              | {b}           | b            | Remove 'b', add 'b', move start to 6      | 3         |
| 8    | [6-7]              | {b}           | b            | 'b' repeats, remove 'b', move start to 7  | 3         |
|      | [7-7]              | {b}           | Add 'b'                                   | 3         |

**Longest substring without repeating characters:**  
- `"abc"` (length 3)

**Output:** `3`

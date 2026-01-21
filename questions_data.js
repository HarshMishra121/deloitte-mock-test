const questionsData = [
    {
        "n": 1,
        "q": "Which of the following is NOT a condition necessary for a deadlock to occur?",
        "a": "Mutual Exclusion",
        "b": "Hold and Wait",
        "c": "No Preemption",
        "d": "Starvation",
        "ans": "d"
    },
    {
        "n": 2,
        "q": "What is the main function of the command interpreter in an OS?",
        "a": "To provide the interface between the user and the computer",
        "b": "To handle the files in the operating system",
        "c": "To get and execute the next user-specified command",
        "d": "None of the above",
        "ans": "c"
    },
    {
        "n": 3,
        "q": "Which scheduling algorithm yields the minimum average waiting time?",
        "a": "FCFS",
        "b": "SJF (Shortest Job First)",
        "c": "Round Robin",
        "d": "Priority",
        "ans": "b"
    },
    {
        "n": 4,
        "q": "The time required to move the disk arm to the required track is known as:",
        "a": "Seek Time",
        "b": "Rotational Delay",
        "c": "Latency",
        "d": "Access Time",
        "ans": "a"
    },
    {
        "n": 5,
        "q": "Virtual memory allows:",
        "a": "Execution of a process that is not completely in memory",
        "b": "Execution of a process that is larger than physical memory",
        "c": "Both A and B",
        "d": "None of the above",
        "ans": "c"
    },
    {
        "n": 6,
        "q": "A semaphore is a shared integer variable that can be accessed only through:",
        "a": "Standard file operations",
        "b": "Two standard atomic operations: Wait and Signal",
        "c": "The compiler",
        "d": "The user",
        "ans": "b"
    },
    {
        "n": 7,
        "q": "In Unix, which system call creates the new process?",
        "a": "create",
        "b": "fork",
        "c": "new",
        "d": "exec",
        "ans": "b"
    },
    {
        "n": 8,
        "q": "Which page replacement algorithm suffers from Belady's Anomaly?",
        "a": "LRU",
        "b": "FIFO",
        "c": "Optimal",
        "d": "LFU",
        "ans": "b"
    },
    {
        "n": 9,
        "q": "Context switching involves:",
        "a": "Saving the state of the old process",
        "b": "Loading the state of the new process",
        "c": "Both A and B",
        "d": "None of the above",
        "ans": "c"
    },
    {
        "n": 10,
        "q": "Inter-process communication can be done through:",
        "a": "Mails",
        "b": "Messages",
        "c": "Pipes",
        "d": "All of the above",
        "ans": "d"
    },
    {
        "n": 11,
        "q": "The ability to query data, as well as insert, delete, and update tuples, is offered by:",
        "a": "DDL (Data Definition Language)",
        "b": "DML (Data Manipulation Language)",
        "c": "DCL (Data Control Language)",
        "d": "TCL (Transaction Control Language)",
        "ans": "b"
    },
    {
        "n": 12,
        "q": "In the relational model, cardinality is termed as:",
        "a": "Number of tuples",
        "b": "Number of attributes",
        "c": "Number of tables",
        "d": "Number of constraints",
        "ans": "a"
    },
    {
        "n": 13,
        "q": "Which normal form is considered adequate for normal relational database design?",
        "a": "2NF",
        "b": "3NF",
        "c": "4NF",
        "d": "5NF",
        "ans": "b"
    },
    {
        "n": 14,
        "q": "An attribute that uniquely identifies each row in a table is known as:",
        "a": "Foreign Key",
        "b": "Primary Key",
        "c": "Candidate Key",
        "d": "Alternate Key",
        "ans": "b"
    },
    {
        "n": 15,
        "q": "The 'HAVING' clause is used in combination with:",
        "a": "SELECT",
        "b": "WHERE",
        "c": "GROUP BY",
        "d": "ORDER BY",
        "ans": "c"
    },
    {
        "n": 16,
        "q": "Which of the following is NOT a type of Database Management System?",
        "a": "Hierarchical",
        "b": "Network",
        "c": "Relational",
        "d": "Sequential",
        "ans": "d"
    },
    {
        "n": 17,
        "q": "What is the full form of ACID properties?",
        "a": "Atomicity, Consistency, Isolation, Database",
        "b": "Atomicity, Consistency, Isolation, Durability",
        "c": "Atomicity, Concurrency, Isolation, Durability",
        "d": "Accuracy, Consistency, Isolation, Durability",
        "ans": "b"
    },
    {
        "n": 18,
        "q": "A transaction completes its execution is said to be:",
        "a": "Committed",
        "b": "Aborted",
        "c": "Rolled back",
        "d": "Failed",
        "ans": "a"
    },
    {
        "n": 19,
        "q": "Which operator is used to compare a value to a list of literal values that have been specified?",
        "a": "LIKE",
        "b": "IN",
        "c": "BETWEEN",
        "d": "ANY",
        "ans": "b"
    },
    {
        "n": 20,
        "q": "SQL Views are also known as:",
        "a": "Complex tables",
        "b": "Simple tables",
        "c": "Virtual tables",
        "d": "Actual tables",
        "ans": "c"
    },
    {
        "n": 21,
        "q": "Which layer is responsible for process-to-process delivery?",
        "a": "Network Layer",
        "b": "Transport Layer",
        "c": "Session Layer",
        "d": "Data Link Layer",
        "ans": "b"
    },
    {
        "n": 22,
        "q": "What is the size of a MAC address?",
        "a": "32 bits",
        "b": "48 bits",
        "c": "64 bits",
        "d": "128 bits",
        "ans": "b"
    },
    {
        "n": 23,
        "q": "Which protocol is used to find the MAC address from an IP address?",
        "a": "RARP",
        "b": "ARP",
        "c": "DHCP",
        "d": "DNS",
        "ans": "b"
    },
    {
        "n": 24,
        "q": "Which topology requires the most amount of cabling?",
        "a": "Ring",
        "b": "Bus",
        "c": "Star",
        "d": "Mesh",
        "ans": "d"
    },
    {
        "n": 25,
        "q": "Which of the following is a connection-oriented protocol?",
        "a": "UDP",
        "b": "IP",
        "c": "TCP",
        "d": "ICMP",
        "ans": "c"
    },
    {
        "n": 26,
        "q": "Port number 25 is reserved for:",
        "a": "HTTP",
        "b": "FTP",
        "c": "SMTP",
        "d": "Telnet",
        "ans": "c"
    },
    {
        "n": 27,
        "q": "The layout of a network is known as:",
        "a": "Protocol",
        "b": "Topology",
        "c": "Architecture",
        "d": "Transmission",
        "ans": "b"
    },
    {
        "n": 28,
        "q": "Which device connects networks with different protocols?",
        "a": "Switch",
        "b": "Hub",
        "c": "Gateway",
        "d": "Router",
        "ans": "c"
    },
    {
        "n": 29,
        "q": "IPv4 addresses are Class A, B, C, D, and E. Which class is reserved for future use?",
        "a": "Class C",
        "b": "Class D",
        "c": "Class E",
        "d": "Class B",
        "ans": "c"
    },
    {
        "n": 30,
        "q": "In OSI model, data compression is the responsibility of:",
        "a": "Application Layer",
        "b": "Presentation Layer",
        "c": "Session Layer",
        "d": "Transport Layer",
        "ans": "b"
    },
    {
        "n": 31,
        "q": "Which of the following is not a feature of OOP?",
        "a": "Encapsulation",
        "b": "Polymorphism",
        "c": "Inheritance",
        "d": "Compilation",
        "ans": "d"
    },
    {
        "n": 32,
        "q": "When a class is defined inside another class, it is called:",
        "a": "Inner Class",
        "b": "Nested Class",
        "c": "Container Class",
        "d": "Embedded Class",
        "ans": "b"
    },
    {
        "n": 33,
        "q": "Which symbol is used for the destructor?",
        "a": "@",
        "b": "#",
        "c": "~",
        "d": "$",
        "ans": "c"
    },
    {
        "n": 34,
        "q": "Pure virtual functions are used in:",
        "a": "Abstract Classes",
        "b": "Static Classes",
        "c": "Global Classes",
        "d": "Friend Classes",
        "ans": "a"
    },
    {
        "n": 35,
        "q": "Friend function can access:",
        "a": "Only Public members",
        "b": "Only Protected members",
        "c": "Only Private members",
        "d": "All members (Public, Private, Protected)",
        "ans": "d"
    },
    {
        "n": 36,
        "q": "Which feature allows a child class to have more than one parent class?",
        "a": "Multilevel Inheritance",
        "b": "Multiple Inheritance",
        "c": "Hierarchical Inheritance",
        "d": "Hybrid Inheritance",
        "ans": "b"
    },
    {
        "n": 37,
        "q": "'cin' and 'cout' in C++ are:",
        "a": "Functions",
        "b": "Classes",
        "c": "Objects",
        "d": "Operators",
        "ans": "c"
    },
    {
        "n": 38,
        "q": "What is the return type of a Constructor?",
        "a": "int",
        "b": "void",
        "c": "float",
        "d": "None",
        "ans": "d"
    },
    {
        "n": 39,
        "q": "Polymorphism can be achieved by:",
        "a": "Function Overloading",
        "b": "Operator Overloading",
        "c": "Virtual Functions",
        "d": "All of the above",
        "ans": "d"
    },
    {
        "n": 40,
        "q": "The 'this' pointer is:",
        "a": "A pointer to the class",
        "b": "A pointer to the object itself",
        "c": "A pointer to the parent class",
        "d": "A global pointer",
        "ans": "b"
    },
    {
        "n": 41,
        "q": "Which data structure works on LIFO principle?",
        "a": "Queue",
        "b": "Stack",
        "c": "Tree",
        "d": "Graph",
        "ans": "b"
    },
    {
        "n": 42,
        "q": "The complexity of Binary Search is:",
        "a": "O(n)",
        "b": "O(n^2)",
        "c": "O(log n)",
        "d": "O(1)",
        "ans": "c"
    },
    {
        "n": 43,
        "q": "Which sorting algorithm is the fastest in the average case?",
        "a": "Bubble Sort",
        "b": "Insertion Sort",
        "c": "Quick Sort",
        "d": "Selection Sort",
        "ans": "c"
    },
    {
        "n": 44,
        "q": "A graph with no cycles is called:",
        "a": "Tree",
        "b": "Bipartite Graph",
        "c": "Connected Graph",
        "d": "Complete Graph",
        "ans": "a"
    },
    {
        "n": 45,
        "q": "Postfix expression of (A+B)*C is:",
        "a": "AB+C*",
        "b": "+AB*C",
        "c": "ABC*+",
        "d": "A+BC*",
        "ans": "a"
    },
    {
        "n": 46,
        "q": "In a Linked List, how many pointers are required to find the previous node?",
        "a": "0",
        "b": "1 (if Doubly Linked List) or Traversal (if Singly)",
        "c": "2",
        "d": "3",
        "ans": "b"
    },
    {
        "n": 47,
        "q": "Elements in an array are accessed:",
        "a": "Sequentially",
        "b": "Randomly",
        "c": "Exponentially",
        "d": "Logarithmically",
        "ans": "b"
    },
    {
        "n": 48,
        "q": "Which data structure is used in recursion?",
        "a": "Queue",
        "b": "Stack",
        "c": "Array",
        "d": "Tree",
        "ans": "b"
    },
    {
        "n": 49,
        "q": "Minimum number of edges in a connected graph with N vertices is:",
        "a": "N",
        "b": "N-1",
        "c": "N+1",
        "d": "N/2",
        "ans": "b"
    },
    {
        "n": 50,
        "q": "Hashing is used for:",
        "a": "Sorting",
        "b": "Searching",
        "c": "Indexing",
        "d": "Both B and C",
        "ans": "d"
    },
    {
        "n": 51,
        "q": "What is the size of 'int' in a 32-bit compiler?",
        "a": "2 bytes",
        "b": "4 bytes",
        "c": "8 bytes",
        "d": "Depends on OS",
        "ans": "b"
    },
    {
        "n": 52,
        "q": "Output of: printf(\"%d\", 10 ? 0 ? 5 : 1 : 12);",
        "a": "10",
        "b": "0",
        "c": "1",
        "d": "12",
        "ans": "c"
    },
    {
        "n": 53,
        "q": "Which header file is required for 'malloc()'?",
        "a": "<stdio.h>",
        "b": "<stdlib.h>",
        "c": "<conio.h>",
        "d": "<alloc.h>",
        "ans": "b"
    },
    {
        "n": 54,
        "q": "What is a memory leak?",
        "a": "Memory that is lost due to power failure",
        "b": "Memory allocated but not freed",
        "c": "Memory accessed illegally",
        "d": "Memory fragmentation",
        "ans": "b"
    },
    {
        "n": 55,
        "q": "'break' statement is used to exit from:",
        "a": "If statement",
        "b": "For loop",
        "c": "Switch statement",
        "d": "Both B and C",
        "ans": "d"
    },
    {
        "n": 56,
        "q": "What is the precedence of operators?",
        "a": "* > + > =",
        "b": "+ > * > =",
        "c": "= > * > +",
        "d": "* > = > +",
        "ans": "a"
    },
    {
        "n": 57,
        "q": "A variable declared inside a function without storage class has:",
        "a": "Global scope",
        "b": "File scope",
        "c": "Block scope (Auto)",
        "d": "Static scope",
        "ans": "c"
    },
    {
        "n": 58,
        "q": "Can we overload the 'sizeof' operator in C++?",
        "a": "Yes",
        "b": "No",
        "c": "Only in classes",
        "d": "Only in structures",
        "ans": "b"
    },
    {
        "n": 59,
        "q": "The keyword 'volatile' implies:",
        "a": "Variable value can change unexpectedly (external hardware/thread)",
        "b": "Variable is constant",
        "c": "Variable is optimized",
        "d": "None of the above",
        "ans": "a"
    },
    {
        "n": 60,
        "q": "Which loop is guaranteed to execute at least once?",
        "a": "for",
        "b": "while",
        "c": "do-while",
        "d": "None",
        "ans": "c"
    },
    {
        "n": 61,
        "q": "In C++, '<<' is:",
        "a": "Insertion operator",
        "b": "Extraction operator",
        "c": "Left shift operator",
        "d": "Both A and C",
        "ans": "d"
    },
    {
        "n": 62,
        "q": "SDLC stands for:",
        "a": "System Development Life Cycle",
        "b": "Software Development Life Cycle",
        "c": "Structure Design Life Cycle",
        "d": "Software Design Logic Cycle",
        "ans": "b"
    },
    {
        "n": 63,
        "q": "Which testing is done by developers?",
        "a": "Unit Testing",
        "b": "Beta Testing",
        "c": "Acceptance Testing",
        "d": "System Testing",
        "ans": "a"
    },
    {
        "n": 64,
        "q": "In IP addressing, 127.0.0.1 is:",
        "a": "Broadcast address",
        "b": "Loopback address",
        "c": "Network address",
        "d": "Multicast address",
        "ans": "b"
    },
    {
        "n": 65,
        "q": "DNS stands for:",
        "a": "Domain Name System",
        "b": "Data Network Service",
        "c": "Digital Network System",
        "d": "Domain Number System",
        "ans": "a"
    },
    {
        "n": 66,
        "q": "Which is not a linear data structure?",
        "a": "Array",
        "b": "Linked List",
        "c": "Queue",
        "d": "Tree",
        "ans": "d"
    },
    {
        "n": 67,
        "q": "'static' variables are stored in which part of memory?",
        "a": "Stack",
        "b": "Heap",
        "c": "Data Segment",
        "d": "Code Segment",
        "ans": "c"
    },
    {
        "n": 68,
        "q": "Difference between Structure and Union?",
        "a": "Structure uses more memory, Union uses memory of largest member",
        "b": "Union uses more memory",
        "c": "No difference",
        "d": "Union cannot have functions",
        "ans": "a"
    },
    {
        "n": 69,
        "q": "Which is faster: ++i or i++?",
        "a": "i++",
        "b": "++i",
        "c": "Both are same",
        "d": "Compiler dependent",
        "ans": "b"
    },
    {
        "n": 70,
        "q": "What is an 'Abstract Class' in Java/C++?",
        "a": "A class with no methods",
        "b": "A class that cannot be instantiated",
        "c": "A class with only static methods",
        "d": "A final class",
        "ans": "b"
    },
    {
        "n": 71,
        "q": "HTTP Error 404 means:",
        "a": "Bad Gateway",
        "b": "Internal Server Error",
        "c": "Not Found",
        "d": "Forbidden",
        "ans": "c"
    },
    {
        "n": 72,
        "q": "Which command is used to check connectivity between two nodes?",
        "a": "ipconfig",
        "b": "ping",
        "c": "traceroute",
        "d": "netstat",
        "ans": "b"
    },
    {
        "n": 73,
        "q": "In a relation, the order of columns is:",
        "a": "Important",
        "b": "Immaterial (Not important)",
        "c": "Significant",
        "d": "None",
        "ans": "b"
    },
    {
        "n": 74,
        "q": "Which key is used to speed up data retrieval?",
        "a": "Primary Key",
        "b": "Foreign Key",
        "c": "Index",
        "d": "Candidate Key",
        "ans": "c"
    },
    {
        "n": 75,
        "q": "The core of the Linux operating system is:",
        "a": "Shell",
        "b": "Kernel",
        "c": "Terminal",
        "d": "Command Line",
        "ans": "b"
    },
    {
        "n": 76,
        "q": "What will be the output?",
        "a": "5 6 7",
        "b": "7 6 5",
        "c": "5 5 5",
        "d": "Compiler Dependent",
        "ans": "d"
    },
    {
        "n": 77,
        "q": "#define SQUARE(x) x*x",
        "a": "25",
        "b": "16",
        "c": "9",
        "d": "41",
        "ans": "c"
    },
    {
        "n": 78,
        "q": "In Python, what is the output of: print(0.1 + 0.2 == 0.3)",
        "a": "True",
        "b": "False",
        "c": "Error",
        "d": "0.3",
        "ans": "b"
    },
    {
        "n": 79,
        "q": "Which of the following is immutable in Python?",
        "a": "List",
        "b": "Dictionary",
        "c": "Set",
        "d": "Tuple",
        "ans": "d"
    },
    {
        "n": 80,
        "q": "Output of:",
        "a": "H",
        "b": "Hello",
        "c": "Address of H",
        "d": "Error",
        "ans": "a"
    },
    {
        "n": 81,
        "q": "What happens if you call free() on a NULL pointer?",
        "a": "Segmentation fault",
        "b": "Compiler Error",
        "c": "Runtime Error",
        "d": "Nothing happens",
        "ans": "d"
    },
    {
        "n": 82,
        "q": "In C++, which operator cannot be overloaded?",
        "a": "+",
        "b": "==",
        "c": ":: (Scope Resolution)",
        "d": "[]",
        "ans": "c"
    },
    {
        "n": 83,
        "q": "Python: print(\"hello\" * 3)",
        "a": "hello3",
        "b": "hello hello hello",
        "c": "hellohellohello",
        "d": "Error",
        "ans": "c"
    },
    {
        "n": 84,
        "q": "Size of 'void' pointer in C?",
        "a": "0",
        "b": "2",
        "c": "4 (32-bit) / 8 (64-bit)",
        "d": "1",
        "ans": "c"
    },
    {
        "n": 85,
        "q": "Which storage class has default initial value as Garbage?",
        "a": "static",
        "b": "extern",
        "c": "auto",
        "d": "global",
        "ans": "c"
    },
    {
        "n": 86,
        "q": "Which component triggers the CPU to switch from User Mode to Kernel Mode?",
        "a": "System Call",
        "b": "Process",
        "c": "Thread",
        "d": "Scheduler",
        "ans": "a"
    },
    {
        "n": 87,
        "q": "'Spooling' stands for:",
        "a": "Simultaneous Peripheral Operation On-Line",
        "b": "Serial Peripheral Operation On-Line",
        "c": "Standard Peripheral Operation On-Line",
        "d": "System Protocol On-Line",
        "ans": "a"
    },
    {
        "n": 88,
        "q": "Which kernel architecture puts minimum code in kernel space?",
        "a": "Monolithic Kernel",
        "b": "Micro Kernel",
        "c": "Hybrid Kernel",
        "d": "Nano Kernel",
        "ans": "b"
    },
    {
        "n": 89,
        "q": "FCFS scheduling is:",
        "a": "Preemptive",
        "b": "Non-Preemptive",
        "c": "Both",
        "d": "None",
        "ans": "b"
    },
    {
        "n": 90,
        "q": "In which state does a process reside if it is ready to execute but waiting for CPU?",
        "a": "Waiting",
        "b": "Blocked",
        "c": "Ready",
        "d": "Running",
        "ans": "c"
    },
    {
        "n": 91,
        "q": "What is 'Fragmentation'?",
        "a": "Dividing a process into threads",
        "b": "Wastage of memory space",
        "c": "Dividing disk into tracks",
        "d": "Context switching",
        "ans": "b"
    },
    {
        "n": 92,
        "q": "Which command shows current running processes in Linux?",
        "a": "tasklist",
        "b": "ps",
        "c": "show",
        "d": "proc",
        "ans": "b"
    },
    {
        "n": 93,
        "q": "A thread is also known as:",
        "a": "Heavyweight Process",
        "b": "Lightweight Process",
        "c": "Scheduler",
        "d": "Child Process",
        "ans": "b"
    },
    {
        "n": 94,
        "q": "User-level threads are faster than Kernel-level threads because:",
        "a": "No context switching is required",
        "b": "OS is not involved in synchronization",
        "c": "They use less memory",
        "d": "They are scheduled by user",
        "ans": "b"
    },
    {
        "n": 95,
        "q": "The problem of 'Indefinite Blockage' of low-priority processes is called:",
        "a": "Deadlock",
        "b": "Starvation",
        "c": "Aging",
        "d": "Paging",
        "ans": "b"
    },
    {
        "n": 96,
        "q": "Which data structure is best for checking balanced parentheses?",
        "a": "Queue",
        "b": "Tree",
        "c": "Stack",
        "d": "Array",
        "ans": "c"
    },
    {
        "n": 97,
        "q": "In a Binary Search Tree (BST), which traversal prints elements in sorted order?",
        "a": "Pre-order",
        "b": "Post-order",
        "c": "In-order",
        "d": "Level-order",
        "ans": "c"
    },
    {
        "n": 98,
        "q": "Height of a complete binary tree with N nodes is:",
        "a": "N",
        "b": "N/2",
        "c": "log N",
        "d": "N*N",
        "ans": "c"
    },
    {
        "n": 99,
        "q": "Which algorithm is used to find the Shortest Path in a graph?",
        "a": "Prim's Algorithm",
        "b": "Kruskal's Algorithm",
        "c": "Dijkstra's Algorithm",
        "d": "DFS",
        "ans": "c"
    },
    {
        "n": 100,
        "q": "Time complexity of inserting an element at the beginning of an array?",
        "a": "O(1)",
        "b": "O(log n)",
        "c": "O(n)",
        "d": "O(n^2)",
        "ans": "c"
    },
    {
        "n": 101,
        "q": "A linear list of elements in which deletion can be done from one end and insertion can take place only at the other end:",
        "a": "Stack",
        "b": "Queue",
        "c": "Tree",
        "d": "Linked List",
        "ans": "b"
    },
    {
        "n": 102,
        "q": "Which collision resolution technique is used in Hashing?",
        "a": "Chaining",
        "b": "Divide and Conquer",
        "c": "Greedy Method",
        "d": "Dynamic Programming",
        "ans": "a"
    },
    {
        "n": 103,
        "q": "Which sort is NOT stable?",
        "a": "Bubble Sort",
        "b": "Insertion Sort",
        "c": "Quick Sort",
        "d": "Merge Sort",
        "ans": "c"
    },
    {
        "n": 104,
        "q": "Maximum number of nodes in a binary tree of height 'h':",
        "a": "2^h",
        "b": "2^(h+1) - 1",
        "c": "2^(h-1)",
        "d": "2*h",
        "ans": "b"
    },
    {
        "n": 105,
        "q": "DFS uses which data structure?",
        "a": "Queue",
        "b": "Stack",
        "c": "Heap",
        "d": "Array",
        "ans": "b"
    },
    {
        "n": 106,
        "q": "Which protocol is stateless?",
        "a": "FTP",
        "b": "HTTP",
        "c": "TCP",
        "d": "POP3",
        "ans": "b"
    },
    {
        "n": 107,
        "q": "Which address identifies a process on a host?",
        "a": "IP Address",
        "b": "MAC Address",
        "c": "Port Number",
        "d": "Socket",
        "ans": "c"
    },
    {
        "n": 108,
        "q": "The 'loopback' IP address is:",
        "a": "127.0.0.0",
        "b": "127.0.0.1",
        "c": "255.255.255.0",
        "d": "0.0.0.0",
        "ans": "b"
    },
    {
        "n": 109,
        "q": "Which layer handles Encryption and Decryption?",
        "a": "Application",
        "b": "Presentation",
        "c": "Session",
        "d": "Transport",
        "ans": "b"
    },
    {
        "n": 110,
        "q": "A firewall operates at which layer?",
        "a": "Physical",
        "b": "Data Link",
        "c": "Network/Transport",
        "d": "Application only",
        "ans": "c"
    },
    {
        "n": 111,
        "q": "Total number of ports in TCP/IP?",
        "a": "1024",
        "b": "32768",
        "c": "65535",
        "d": "Infinite",
        "ans": "c"
    },
    {
        "n": 112,
        "q": "Which protocol sends email?",
        "a": "POP3",
        "b": "IMAP",
        "c": "SMTP",
        "d": "HTTP",
        "ans": "c"
    },
    {
        "n": 113,
        "q": "'Check Sum' is used for:",
        "a": "Error Correction",
        "b": "Error Detection",
        "c": "Encryption",
        "d": "Flow Control",
        "ans": "b"
    },
    {
        "n": 114,
        "q": "Difference between Hub and Switch?",
        "a": "Hub broadcasts data to all ports; Switch sends to specific MAC",
        "b": "Switch is slower",
        "c": "Hub is intelligent",
        "d": "No difference",
        "ans": "a"
    },
    {
        "n": 115,
        "q": "What is the length of a MAC address?",
        "a": "32 bits",
        "b": "48 bits",
        "c": "128 bits",
        "d": "64 bits",
        "ans": "b"
    },
    {
        "n": 116,
        "q": "Which JOIN returns rows when there is a match in one of the tables?",
        "a": "INNER JOIN",
        "b": "LEFT JOIN",
        "c": "FULL OUTER JOIN",
        "d": "RIGHT JOIN",
        "ans": "c"
    },
    {
        "n": 117,
        "q": "'COMMIT' and 'ROLLBACK' are examples of:",
        "a": "DDL",
        "b": "DML",
        "c": "TCL",
        "d": "DCL",
        "ans": "c"
    },
    {
        "n": 118,
        "q": "Which function is used to count rows?",
        "a": "SUM()",
        "b": "TOTAL()",
        "c": "COUNT()",
        "d": "ADD()",
        "ans": "c"
    },
    {
        "n": 119,
        "q": "A key that consists of two or more attributes to uniquely identify a row:",
        "a": "Foreign Key",
        "b": "Composite Key",
        "c": "Surrogate Key",
        "d": "Super Key",
        "ans": "b"
    },
    {
        "n": 120,
        "q": "In ER Diagram, a Rectangle represents:",
        "a": "Attribute",
        "b": "Relationship",
        "c": "Entity",
        "d": "Weak Entity",
        "ans": "c"
    },
    {
        "n": 121,
        "q": "Default ordering in 'ORDER BY' is:",
        "a": "Descending",
        "b": "Ascending",
        "c": "Random",
        "d": "None",
        "ans": "b"
    },
    {
        "n": 122,
        "q": "Which command grants permissions?",
        "a": "ALLOW",
        "b": "GRANT",
        "c": "REVOKE",
        "d": "PERMIT",
        "ans": "b"
    },
    {
        "n": 123,
        "q": "'NULL' in SQL means:",
        "a": "Zero",
        "b": "Blank Space",
        "c": "Unknown or Missing Value",
        "d": "Empty String",
        "ans": "c"
    },
    {
        "n": 124,
        "q": "The 'Wildcard' character for a single character in SQL LIKE clause:",
        "a": "%",
        "b": "*",
        "c": "_ (Underscore)",
        "d": "?",
        "ans": "c"
    },
    {
        "n": 125,
        "q": "3NF deals with:",
        "a": "Repeating Groups",
        "b": "Partial Dependency",
        "c": "Transitive Dependency",
        "d": "Multi-valued Dependency",
        "ans": "c"
    },
    {
        "n": 126,
        "q": "What does SaaS stand for?",
        "a": "System as a Service",
        "b": "Software as a Service",
        "c": "Security as a Service",
        "d": "Storage as a Service",
        "ans": "b"
    },
    {
        "n": 127,
        "q": "Which is an example of IaaS (Infrastructure as a Service)?",
        "a": "Gmail",
        "b": "AWS EC2",
        "c": "Google Drive",
        "d": "Salesforce",
        "ans": "b"
    },
    {
        "n": 128,
        "q": "What is 'Big Data' characterized by (3 Vs)?",
        "a": "Volume, Velocity, Variety",
        "b": "Volume, Video, Vendor",
        "c": "Virtual, Visual, Variety",
        "d": "Velocity, Verification, Video",
        "ans": "a"
    },
    {
        "n": 129,
        "q": "Git is a:",
        "a": "Text Editor",
        "b": "Version Control System",
        "c": "Operating System",
        "d": "Compiler",
        "ans": "b"
    },
    {
        "n": 130,
        "q": "IoT stands for:",
        "a": "Input of Things",
        "b": "Internet of Technology",
        "c": "Internet of Things",
        "d": "Intranet of Things",
        "ans": "c"
    },
    {
        "n": 131,
        "q": "If A is father of B, but B is not son of A. What is B?",
        "a": "Grandson",
        "b": "Daughter",
        "c": "Brother",
        "d": "Father",
        "ans": "b"
    },
    {
        "n": 132,
        "q": "Binary of 10?",
        "a": "1000",
        "b": "1010",
        "c": "1100",
        "d": "1001",
        "ans": "b"
    },
    {
        "n": 133,
        "q": "1 Byte = ? bits",
        "a": "4",
        "b": "8",
        "c": "16",
        "d": "32",
        "ans": "b"
    },
    {
        "n": 134,
        "q": "Hexadecimal uses base:",
        "a": "8",
        "b": "10",
        "c": "16",
        "d": "2",
        "ans": "c"
    },
    {
        "n": 135,
        "q": "ASCII value of 'A'?",
        "a": "64",
        "b": "65",
        "c": "97",
        "d": "90",
        "ans": "b"
    },
    {
        "n": 136,
        "q": "Which gate returns TRUE only if both inputs are TRUE?",
        "a": "OR",
        "b": "AND",
        "c": "XOR",
        "d": "NAND",
        "ans": "b"
    },
    {
        "n": 137,
        "q": "XOR of 1 and 1 is:",
        "a": "0",
        "b": "1",
        "c": "2",
        "d": "10",
        "ans": "a"
    },
    {
        "n": 138,
        "q": "2's complement of a binary number is obtained by:",
        "a": "Inverting bits",
        "b": "Adding 1 to 1's complement",
        "c": "Inverting LSB",
        "d": "Adding 1 to MSB",
        "ans": "b"
    },
    {
        "n": 139,
        "q": "Which sort is best for nearly sorted array?",
        "a": "Quick Sort",
        "b": "Insertion Sort",
        "c": "Selection Sort",
        "d": "Merge Sort",
        "ans": "b"
    },
    {
        "n": 140,
        "q": "Time complexity to search in Hash Table (Average):",
        "a": "O(n)",
        "b": "O(1)",
        "c": "O(log n)",
        "d": "O(n^2)",
        "ans": "b"
    },
    {
        "n": 141,
        "q": "The waterfall model is:",
        "a": "Iterative",
        "b": "Linear Sequential",
        "c": "Cyclic",
        "d": "Spiral",
        "ans": "b"
    },
    {
        "n": 142,
        "q": "SRS stands for:",
        "a": "System Requirement Syntax",
        "b": "Software Requirement Specification",
        "c": "System Resource Schedule",
        "d": "Software Repair System",
        "ans": "b"
    },
    {
        "n": 143,
        "q": "White Box Testing checks:",
        "a": "Internal Logic/Code",
        "b": "UI only",
        "c": "User Requirements",
        "d": "Hardware",
        "ans": "a"
    },
    {
        "n": 144,
        "q": "Alpha testing is done by:",
        "a": "Customer",
        "b": "Tester/Developer at developer's site",
        "c": "Public",
        "d": "None",
        "ans": "b"
    },
    {
        "n": 145,
        "q": "\"Agile\" methodology emphasizes:",
        "a": "Rigid documentation",
        "b": "Customer collaboration and response to change",
        "c": "Following a plan strictly",
        "d": "Long development cycles",
        "ans": "b"
    },
    {
        "n": 146,
        "q": "Coupling in software design should be:",
        "a": "High",
        "b": "Low",
        "c": "Medium",
        "d": "None",
        "ans": "b"
    },
    {
        "n": 147,
        "q": "Cohesion in software design should be:",
        "a": "High",
        "b": "Low",
        "c": "Zero",
        "d": "Random",
        "ans": "a"
    },
    {
        "n": 148,
        "q": "UML stands for:",
        "a": "Unified Modeling Language",
        "b": "Universal Modeling Logic",
        "c": "Unique Machine Language",
        "d": "User Maintained Language",
        "ans": "a"
    },
    {
        "n": 149,
        "q": "Verification vs Validation?",
        "a": "Both are same",
        "b": "Verification: \"Are we building the product right?\", Validation: \"Are we building the right product?\"",
        "c": "Validation is done first",
        "d": "Verification is done by users",
        "ans": "b"
    },
    {
        "n": 150,
        "q": "Debugging is:",
        "a": "Creating bugs",
        "b": "Finding and fixing bugs",
        "c": "Documentation",
        "d": "Testing",
        "ans": "b"
    },
    {
        "n": 151,
        "q": "Which system call is used to duplicate a process in Unix?",
        "a": "exec()",
        "b": "fork()",
        "c": "dup()",
        "d": "clone()",
        "ans": "b"
    },
    {
        "n": 152,
        "q": "In 'Round Robin' scheduling, if the Time Quantum is very large, the algorithm behaves like:",
        "a": "SJF",
        "b": "FCFS",
        "c": "Priority",
        "d": "Multilevel Queue",
        "ans": "b"
    },
    {
        "n": 153,
        "q": "The address generated by the CPU is known as:",
        "a": "Physical Address",
        "b": "Logical Address",
        "c": "Absolute Address",
        "d": "MAC Address",
        "ans": "b"
    },
    {
        "n": 154,
        "q": "What is 'Thrashing' in an Operating System?",
        "a": "CPU executing a process efficiently",
        "b": "Excessive swapping of pages between memory and disk",
        "c": "A virus attack",
        "d": "Hard disk crash",
        "ans": "b"
    },
    {
        "n": 155,
        "q": "Which command in Linux changes file permissions?",
        "a": "chown",
        "b": "chgrp",
        "c": "chmod",
        "d": "rm",
        "ans": "c"
    },
    {
        "n": 156,
        "q": "A 'Critical Section' is a code segment where:",
        "a": "Shared resources are accessed",
        "b": "Process is terminated",
        "c": "Process waits for I/O",
        "d": "Memory is allocated",
        "ans": "a"
    },
    {
        "n": 157,
        "q": "Which of the following is NOT a type of kernel?",
        "a": "Monolithic",
        "b": "Micro",
        "c": "Nano",
        "d": "Macro",
        "ans": "d"
    },
    {
        "n": 158,
        "q": "The bootstrap program is stored in:",
        "a": "RAM",
        "b": "ROM (BIOS)",
        "c": "Hard Disk",
        "d": "Cache",
        "ans": "b"
    },
    {
        "n": 159,
        "q": "Which technique is used to solve external fragmentation?",
        "a": "Paging",
        "b": "Compaction",
        "c": "Segmentation",
        "d": "Swapping",
        "ans": "b"
    },
    {
        "n": 160,
        "q": "'Mutex' stands for:",
        "a": "Mutual Execution",
        "b": "Mutual Exclusion",
        "c": "Memory Execution",
        "d": "Multiple Exclusion",
        "ans": "b"
    },
    {
        "n": 161,
        "q": "What is the state of a process after it completes its execution but parent has not yet read its status?",
        "a": "Orphan",
        "b": "Zombie",
        "c": "Sleeping",
        "d": "Running",
        "ans": "b"
    },
    {
        "n": 162,
        "q": "Which directory in Linux contains device files?",
        "a": "/etc",
        "b": "/bin",
        "c": "/dev",
        "d": "/lib",
        "ans": "c"
    },
    {
        "n": 163,
        "q": "'Context Switch' takes place at:",
        "a": "User Level",
        "b": "Kernel Level",
        "c": "Hardware Level",
        "d": "Application Level",
        "ans": "b"
    },
    {
        "n": 164,
        "q": "Logical address is converted to physical address by:",
        "a": "CPU",
        "b": "MMU (Memory Management Unit)",
        "c": "Compiler",
        "d": "Loader",
        "ans": "b"
    },
    {
        "n": 165,
        "q": "FIFO page replacement algorithm suffers from:",
        "a": "Stack Anomaly",
        "b": "Belady's Anomaly",
        "c": "Aging",
        "d": "Starvation",
        "ans": "b"
    },
    {
        "n": 166,
        "q": "Which key constraint enforces Referential Integrity?",
        "a": "Primary Key",
        "b": "Unique Key",
        "c": "Foreign Key",
        "d": "Not Null",
        "ans": "c"
    },
    {
        "n": 167,
        "q": "Which SQL operator is used to search for a specified pattern in a column?",
        "a": "IN",
        "b": "BETWEEN",
        "c": "LIKE",
        "d": "EXISTS",
        "ans": "c"
    },
    {
        "n": 168,
        "q": "A 'Trigger' in DBMS is:",
        "a": "A statement that enables a transaction",
        "b": "Code that automatically executes in response to certain events",
        "c": "A type of View",
        "d": "A user permission",
        "ans": "b"
    },
    {
        "n": 169,
        "q": "'Normalization' is the process of:",
        "a": "Organizing data to minimize redundancy",
        "b": "Creating backups",
        "c": "Encrypting data",
        "d": "Adding more tables",
        "ans": "a"
    },
    {
        "n": 170,
        "q": "Which command undoes all updates performed by the SQL in the transaction?",
        "a": "COMMIT",
        "b": "ROLLBACK",
        "c": "SAVEPOINT",
        "d": "TRUNCATE",
        "ans": "b"
    },
    {
        "n": 171,
        "q": "The command 'SELECT DISTINCT name FROM student' will:",
        "a": "Show all names",
        "b": "Show unique names (remove duplicates)",
        "c": "Show names sorted alphabetically",
        "d": "Show names starting with D",
        "ans": "b"
    },
    {
        "n": 172,
        "q": "BCNF (Boyce-Codd Normal Form) is a stricter version of:",
        "a": "1NF",
        "b": "2NF",
        "c": "3NF",
        "d": "4NF",
        "ans": "c"
    },
    {
        "n": 173,
        "q": "Which of the following is a DCL command?",
        "a": "INSERT",
        "b": "UPDATE",
        "c": "GRANT",
        "d": "CREATE",
        "ans": "c"
    },
    {
        "n": 174,
        "q": "A 'Cursor' in SQL is used for:",
        "a": "Row-by-row processing of result sets",
        "b": "Connecting to the database",
        "c": "Deleting tables",
        "d": "Indexing",
        "ans": "a"
    },
    {
        "n": 175,
        "q": "The specific condition where two transactions are waiting for each other to release the lock is:",
        "a": "Starvation",
        "b": "Deadlock",
        "c": "Livelock",
        "d": "Time-out",
        "ans": "b"
    },
    {
        "n": 176,
        "q": "Which type of failure occurs when the system loses data in main memory due to power failure?",
        "a": "Disk Crash",
        "b": "Transaction Failure",
        "c": "System Crash (Volatile storage failure)",
        "d": "Media Failure",
        "ans": "c"
    },
    {
        "n": 177,
        "q": "'Clustered Index' determines the:",
        "a": "Logical order of data",
        "b": "Physical order of data in the table",
        "c": "Size of the table",
        "d": "Number of columns",
        "ans": "b"
    },
    {
        "n": 178,
        "q": "What is the result of `SELECT COUNT(*) FROM Table` if table is empty?",
        "a": "NULL",
        "b": "0",
        "c": "Error",
        "d": "Undefined",
        "ans": "b"
    },
    {
        "n": 179,
        "q": "UNION operator:",
        "a": "Combines results of two queries and keeps duplicates",
        "b": "Combines results and removes duplicates",
        "c": "Joins two tables",
        "d": "Intersects two tables",
        "ans": "b"
    },
    {
        "n": 180,
        "q": "Which property ensures that concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially?",
        "a": "Atomicity",
        "b": "Isolation",
        "c": "Durability",
        "d": "Consistency",
        "ans": "b"
    },
    {
        "n": 181,
        "q": "Which layer decides the path for data to travel (Routing)?",
        "a": "Physical",
        "b": "Data Link",
        "c": "Network",
        "d": "Transport",
        "ans": "c"
    },
    {
        "n": 182,
        "q": "IPv4 address is ___ bits and MAC address is ___ bits.",
        "a": "32, 32",
        "b": "32, 48",
        "c": "48, 32",
        "d": "64, 48",
        "ans": "b"
    },
    {
        "n": 183,
        "q": "Which protocol provides reliable, connection-oriented delivery?",
        "a": "UDP",
        "b": "IP",
        "c": "TCP",
        "d": "Ethernet",
        "ans": "c"
    },
    {
        "n": 184,
        "q": "DNS translates:",
        "a": "IP to MAC",
        "b": "Domain Name to IP",
        "c": "MAC to IP",
        "d": "High level language to Machine language",
        "ans": "b"
    },
    {
        "n": 185,
        "q": "In which topology, if one cable breaks, the entire network goes down?",
        "a": "Star",
        "b": "Bus",
        "c": "Mesh",
        "d": "Tree",
        "ans": "b"
    },
    {
        "n": 186,
        "q": "Port 80 is used for __ and Port 443 is used for __.",
        "a": "HTTP, HTTPS",
        "b": "FTP, HTTP",
        "c": "SMTP, POP3",
        "d": "Telnet, SSH",
        "ans": "a"
    },
    {
        "n": 187,
        "q": "Which device operates at the Physical Layer?",
        "a": "Router",
        "b": "Switch",
        "c": "Hub",
        "d": "Gateway",
        "ans": "c"
    },
    {
        "n": 188,
        "q": "'Ping' uses which protocol?",
        "a": "TCP",
        "b": "ARP",
        "c": "ICMP",
        "d": "BOOTP",
        "ans": "c"
    },
    {
        "n": 189,
        "q": "What is the purpose of 'Subnet Mask'?",
        "a": "To identify the network and host portion of an IP",
        "b": "To hide the IP",
        "c": "To encrypt data",
        "d": "To speed up internet",
        "ans": "a"
    },
    {
        "n": 190,
        "q": "Error detection at the Data Link Layer is done using:",
        "a": "Hamming Code",
        "b": "CRC (Cyclic Redundancy Check)",
        "c": "Bit Stuffing",
        "d": "Encryption",
        "ans": "b"
    },
    {
        "n": 191,
        "q": "Which class of IP address allows the maximum number of hosts per network?",
        "a": "Class A",
        "b": "Class B",
        "c": "Class C",
        "d": "Class D",
        "ans": "a"
    },
    {
        "n": 192,
        "q": "DHCP stands for:",
        "a": "Dynamic Host Configuration Protocol",
        "b": "Data Host Control Protocol",
        "c": "Domain Host Control Protocol",
        "d": "Dynamic Host Control Procedure",
        "ans": "a"
    },
    {
        "n": 193,
        "q": "Which layer handles 'Flow Control'?",
        "a": "Transport Only",
        "b": "Data Link Only",
        "c": "Both Data Link and Transport",
        "d": "Network",
        "ans": "c"
    },
    {
        "n": 194,
        "q": "The process of adding a header to the data is called:",
        "a": "Decapsulation",
        "b": "Encapsulation",
        "c": "Encryption",
        "d": "Segmentation",
        "ans": "b"
    },
    {
        "n": 195,
        "q": "A 'Firewall' is used to:",
        "a": "Connect two networks",
        "b": "Protect the network from unauthorized access",
        "c": "Route data",
        "d": "Amplify signals",
        "ans": "b"
    },
    {
        "n": 196,
        "q": "Which data structure is used for 'Undo' operation in editors?",
        "a": "Queue",
        "b": "Stack",
        "c": "Linked List",
        "d": "Tree",
        "ans": "b"
    },
    {
        "n": 197,
        "q": "A binary tree where for every node, the left child is smaller and right child is larger is called:",
        "a": "Heap",
        "b": "AVL Tree",
        "c": "Binary Search Tree (BST)",
        "d": "B-Tree",
        "ans": "c"
    },
    {
        "n": 198,
        "q": "Worst case time complexity of accessing an element in a Linked List?",
        "a": "O(1)",
        "b": "O(log n)",
        "c": "O(n)",
        "d": "O(n^2)",
        "ans": "c"
    },
    {
        "n": 199,
        "q": "Which data structure is best for Breadth First Search (BFS)?",
        "a": "Stack",
        "b": "Queue",
        "c": "Priority Queue",
        "d": "Array",
        "ans": "b"
    },
    {
        "n": 200,
        "q": "In a Stack, if TOP = MAX-1, the stack is:",
        "a": "Empty",
        "b": "Full (Overflow condition)",
        "c": "Half full",
        "d": "Garbage",
        "ans": "b"
    },
    {
        "n": 201,
        "q": "Circular Queue overcomes the limitation of:",
        "a": "Stack Overflow",
        "b": "Unused memory spaces in Linear Queue",
        "c": "Slow access",
        "d": "Complexity",
        "ans": "b"
    },
    {
        "n": 202,
        "q": "Which sorting algorithm divides the array into two halves?",
        "a": "Bubble Sort",
        "b": "Selection Sort",
        "c": "Merge Sort",
        "d": "Insertion Sort",
        "ans": "c"
    },
    {
        "n": 203,
        "q": "The number of edges in a tree with N nodes is always:",
        "a": "N",
        "b": "N - 1",
        "c": "N + 1",
        "d": "2N",
        "ans": "b"
    },
    {
        "n": 204,
        "q": "Which data structure is used to implement recursion?",
        "a": "Queue",
        "b": "Stack",
        "c": "Graph",
        "d": "Hash Table",
        "ans": "b"
    },
    {
        "n": 205,
        "q": "Quick Sort uses which design technique?",
        "a": "Greedy",
        "b": "Divide and Conquer",
        "c": "Dynamic Programming",
        "d": "Backtracking",
        "ans": "b"
    },
    {
        "n": 206,
        "q": "Which concept allows a class to hide internal details and show only functionality?",
        "a": "Inheritance",
        "b": "Encapsulation",
        "c": "Abstraction",
        "d": "Polymorphism",
        "ans": "c"
    },
    {
        "n": 207,
        "q": "A function that can access private members of a class but is not a member of that class:",
        "a": "Inline function",
        "b": "Friend function",
        "c": "Static function",
        "d": "Virtual function",
        "ans": "b"
    },
    {
        "n": 208,
        "q": "'new' and 'delete' in C++ are:",
        "a": "Functions",
        "b": "Operators",
        "c": "Data types",
        "d": "Classes",
        "ans": "b"
    },
    {
        "n": 209,
        "q": "Runtime polymorphism is achieved using:",
        "a": "Function Overloading",
        "b": "Operator Overloading",
        "c": "Virtual Functions",
        "d": "Constructor Overloading",
        "ans": "c"
    },
    {
        "n": 210,
        "q": "Which constructor is called when an object is initialized with another object of the same class?",
        "a": "Default Constructor",
        "b": "Copy Constructor",
        "c": "Parameterized Constructor",
        "d": "Dynamic Constructor",
        "ans": "b"
    },
    {
        "n": 211,
        "q": "An abstract class in C++ must contain at least one:",
        "a": "Static function",
        "b": "Pure virtual function",
        "c": "Friend function",
        "d": "Constructor",
        "ans": "b"
    },
    {
        "n": 212,
        "q": "Members of a class are by default:",
        "a": "Public",
        "b": "Private",
        "c": "Protected",
        "d": "Static",
        "ans": "b"
    },
    {
        "n": 213,
        "q": "The mechanism of deriving a class from another 'derived' class is known as:",
        "a": "Multiple Inheritance",
        "b": "Multilevel Inheritance",
        "c": "Single Inheritance",
        "d": "Hybrid Inheritance",
        "ans": "b"
    },
    {
        "n": 214,
        "q": "Diamond problem (ambiguity) occurs in:",
        "a": "Single Inheritance",
        "b": "Multilevel Inheritance",
        "c": "Multiple Inheritance",
        "d": "Hierarchical Inheritance",
        "ans": "c"
    },
    {
        "n": 215,
        "q": "'static' member functions can access:",
        "a": "Only static data members",
        "b": "Only non-static data members",
        "c": "Both static and non-static",
        "d": "None",
        "ans": "a"
    },
    {
        "n": 216,
        "q": "In C, 'segmentation fault' occurs due to:",
        "a": "Syntax error",
        "b": "Illegal memory access",
        "c": "Division by zero",
        "d": "Infinite loop",
        "ans": "b"
    },
    {
        "n": 217,
        "q": "Which is a valid variable name?",
        "a": "1var",
        "b": "_var",
        "c": "var-name",
        "d": "int",
        "ans": "b"
    },
    {
        "n": 218,
        "q": "In Python, which keyword is used to define a function?",
        "a": "func",
        "b": "def",
        "c": "function",
        "d": "define",
        "ans": "b"
    },
    {
        "n": 219,
        "q": "Which command is used to check the IP address in Windows?",
        "a": "ifconfig",
        "b": "ipconfig",
        "c": "ipcheck",
        "d": "netip",
        "ans": "b"
    },
    {
        "n": 220,
        "q": "The default return type of main() in C++ is:",
        "a": "void",
        "b": "int",
        "c": "float",
        "d": "char",
        "ans": "b"
    },
    {
        "n": 221,
        "q": "A pointer that is pointing to a memory location that has been deleted (freed) is called:",
        "a": "Null Pointer",
        "b": "Void Pointer",
        "c": "Dangling Pointer",
        "d": "Wild Pointer",
        "ans": "c"
    },
    {
        "n": 222,
        "q": "Complexity of accessing an element in a Hash Table (Best Case):",
        "a": "O(1)",
        "b": "O(n)",
        "c": "O(log n)",
        "d": "O(n log n)",
        "ans": "a"
    },
    {
        "n": 223,
        "q": "What is 'Inorder' traversal sequence?",
        "a": "Root -> Left -> Right",
        "b": "Left -> Root -> Right",
        "c": "Left -> Right -> Root",
        "d": "Right -> Left -> Root",
        "ans": "b"
    },
    {
        "n": 224,
        "q": "Which data structure is used in Breadth First Search of a graph?",
        "a": "Stack",
        "b": "Queue",
        "c": "Tree",
        "d": "Array",
        "ans": "b"
    },
    {
        "n": 225,
        "q": "Full form of URL:",
        "a": "Uniform Resource Locator",
        "b": "Uniform Resource Link",
        "c": "Unified Resource Locator",
        "d": "Uniform Reference Locator",
        "ans": "a"
    },
    {
        "n": 226,
        "q": "Which cloud service model provides a platform allowing customers to develop, run, and manage applications without the complexity of building infrastructure?",
        "a": "IaaS (Infrastructure as a Service)",
        "b": "PaaS (Platform as a Service)",
        "c": "SaaS (Software as a Service)",
        "d": "DaaS (Desktop as a Service)",
        "ans": "b"
    },
    {
        "n": 227,
        "q": "What is the software called that creates and runs virtual machines (VMs)?",
        "a": "Kernel",
        "b": "Hypervisor",
        "c": "Docker",
        "d": "Compiler",
        "ans": "b"
    },
    {
        "n": 228,
        "q": "Which type of cloud is deployed within a single organization and is used only by them?",
        "a": "Public Cloud",
        "b": "Private Cloud",
        "c": "Hybrid Cloud",
        "d": "Community Cloud",
        "ans": "b"
    },
    {
        "n": 229,
        "q": "AWS, Microsoft Azure, and Google Cloud are examples of:",
        "a": "Public Cloud",
        "b": "Private Cloud",
        "c": "Personal Cloud",
        "d": "Internal Cloud",
        "ans": "a"
    },
    {
        "n": 230,
        "q": "In Information Security, the CIA triad stands for:",
        "a": "Confidentiality, Integrity, Availability",
        "b": "Control, Intelligence, Access",
        "c": "Cyber, Internet, Applications",
        "d": "Confidentiality, Identity, Authentication",
        "ans": "a"
    },
    {
        "n": 231,
        "q": "Which type of attack involves overwhelming a server with traffic to make it unavailable to users?",
        "a": "Phishing",
        "b": "SQL Injection",
        "c": "DoS / DDoS (Denial of Service)",
        "d": "Man-in-the-Middle",
        "ans": "c"
    },
    {
        "n": 232,
        "q": "Which protocol is used to securely log onto remote systems (replacing Telnet)?",
        "a": "FTP",
        "b": "HTTP",
        "c": "SSH (Secure Shell)",
        "d": "SMTP",
        "ans": "c"
    },
    {
        "n": 233,
        "q": "The process of converting data into a coded form to prevent unauthorized access is:",
        "a": "Hashing",
        "b": "Encryption",
        "c": "Decapsulation",
        "d": "Firewalling",
        "ans": "b"
    },
    {
        "n": 234,
        "q": "Which of the following is an example of Symmetric Encryption?",
        "a": "RSA",
        "b": "AES (Advanced Encryption Standard)",
        "c": "ECC",
        "d": "Diffie-Hellman",
        "ans": "b"
    },
    {
        "n": 235,
        "q": "Which type of Machine Learning involves training a model on labeled data?",
        "a": "Unsupervised Learning",
        "b": "Supervised Learning",
        "c": "Reinforcement Learning",
        "d": "Clustering",
        "ans": "b"
    },
    {
        "n": 236,
        "q": "A problem where the model learns the training data too well, negatively impacting performance on new data, is called:",
        "a": "Underfitting",
        "b": "Overfitting",
        "c": "Bias",
        "d": "Regularization",
        "ans": "b"
    },
    {
        "n": 237,
        "q": "Which algorithm is commonly used for Classification problems?",
        "a": "Linear Regression",
        "b": "Logistic Regression",
        "c": "K-Means Clustering",
        "d": "Apriori",
        "ans": "b"
    },
    {
        "n": 238,
        "q": "In C++, which operator is used to access members of a class using a pointer to an object?",
        "a": ". (Dot)",
        "b": "-> (Arrow)",
        "c": ": (Colon)",
        "d": ":: (Scope Resolution)",
        "ans": "b"
    },
    {
        "n": 239,
        "q": "Which data structure is primarily used to implement a 'Undo' feature or 'Back' button in browsers?",
        "a": "Queue",
        "b": "Stack",
        "c": "Tree",
        "d": "Graph",
        "ans": "b"
    },
    {
        "n": 240,
        "q": "What is the time complexity of searching in a Balanced Binary Search Tree (BST)?",
        "a": "O(n)",
        "b": "O(log n)",
        "c": "O(n^2)",
        "d": "O(1)",
        "ans": "b"
    },
    {
        "n": 241,
        "q": "The concept of multiple classes sharing the same interface but different implementations is:",
        "a": "Encapsulation",
        "b": "Polymorphism",
        "c": "Inheritance",
        "d": "Coupling",
        "ans": "b"
    },
    {
        "n": 242,
        "q": "Which type of database is best suited for unstructured data (like social media posts)?",
        "a": "Relational Database (SQL)",
        "b": "NoSQL Database (e.g., MongoDB)",
        "c": "Hierarchical Database",
        "d": "Network Database",
        "ans": "b"
    },
    {
        "n": 243,
        "q": "In a database transaction, which state is reached after the final statement has been executed?",
        "a": "Active",
        "b": "Partially Committed",
        "c": "Committed",
        "d": "Failed",
        "ans": "b"
    },
    {
        "n": 244,
        "q": "A 'Proxy Server' is used for:",
        "a": "Speeding up access to resources (Caching)",
        "b": "Hiding the client's IP address",
        "c": "Filtering content",
        "d": "All of the above",
        "ans": "d"
    },
    {
        "n": 245,
        "q": "Which VPN protocol is considered the most secure and widely used today?",
        "a": "PPTP",
        "b": "OpenVPN",
        "c": "L2TP",
        "d": "WEP",
        "ans": "b"
    },
    {
        "n": 246,
        "q": "What will `x = x << 1` do to the integer `x`?",
        "a": "Divide by 2",
        "b": "Multiply by 2",
        "c": "Add 1",
        "d": "Subtract 1",
        "ans": "b"
    },
    {
        "n": 247,
        "q": "In Python, which keyword is used to handle exceptions?",
        "a": "catch",
        "b": "except",
        "c": "handle",
        "d": "error",
        "ans": "b"
    },
    {
        "n": 248,
        "q": "Which is NOT a valid access specifier in Java?",
        "a": "private",
        "b": "public",
        "c": "protected",
        "d": "friend",
        "ans": "d"
    },
    {
        "n": 249,
        "q": "What is the output of `10 % 3`?",
        "a": "3",
        "b": "1",
        "c": "3.33",
        "d": "0",
        "ans": "b"
    },
    {
        "n": 250,
        "q": "'Recursion' without a base case leads to:",
        "a": "Syntax Error",
        "b": "Stack Overflow",
        "c": "Logical Error",
        "d": "Fast Execution",
        "ans": "b"
    },
    {
        "n": 251,
        "q": "What is the time complexity of Floyd-Warshall algorithm?",
        "a": "O(n^2)",
        "b": "O(n^3)",
        "c": "O(n log n)",
        "d": "O(E + V)",
        "ans": "b"
    },
    {
        "n": 252,
        "q": "Which data structure is used to implement a 'Cache' (LRU - Least Recently Used)?",
        "a": "Stack",
        "b": "Hash Map + Doubly Linked List",
        "c": "Binary Search Tree",
        "d": "Array",
        "ans": "b"
    },
    {
        "n": 253,
        "q": "In a Min-Heap, the root node always contains:",
        "a": "The maximum value",
        "b": "The minimum value",
        "c": "The middle value",
        "d": "Random value",
        "ans": "b"
    },
    {
        "n": 254,
        "q": "Which traversal of a BST yields elements in descending order?",
        "a": "Inorder",
        "b": "Reverse Inorder (Right-Root-Left)",
        "c": "Preorder",
        "d": "Postorder",
        "ans": "b"
    },
    {
        "n": 255,
        "q": "The 'Tower of Hanoi' puzzle is a classic example of:",
        "a": "Greedy Algorithm",
        "b": "Divide and Conquer",
        "c": "Recursion",
        "d": "Dynamic Programming",
        "ans": "c"
    },
    {
        "n": 256,
        "q": "Which sorting algorithm is known as the 'worst' due to O(n!) complexity in worst cases (Bogo Sort)?",
        "a": "Bubble Sort",
        "b": "Bogo Sort (Permutation Sort)",
        "c": "Shell Sort",
        "d": "Radix Sort",
        "ans": "b"
    },
    {
        "n": 257,
        "q": "What is a 'Sparse Matrix'?",
        "a": "A matrix with all zeros",
        "b": "A matrix with mostly zero elements",
        "c": "A matrix with mostly non-zero elements",
        "d": "An identity matrix",
        "ans": "b"
    },
    {
        "n": 258,
        "q": "Rabin-Karp algorithm is used for:",
        "a": "Sorting",
        "b": "Shortest Path",
        "c": "String Matching / Pattern Searching",
        "d": "Minimum Spanning Tree",
        "ans": "c"
    },
    {
        "n": 259,
        "q": "Which data structure is useful for implementing a Dictionary or Spell Checker?",
        "a": "Linked List",
        "b": "Trie (Prefix Tree)",
        "c": "Stack",
        "d": "Queue",
        "ans": "b"
    },
    {
        "n": 260,
        "q": "Which collision resolution technique involves finding the next empty slot sequentially?",
        "a": "Chaining",
        "b": "Linear Probing",
        "c": "Quadratic Probing",
        "d": "Double Hashing",
        "ans": "b"
    },
    {
        "n": 261,
        "q": "The height of a Red-Black Tree with n nodes is approximately:",
        "a": "n",
        "b": "2n",
        "c": "2 log(n+1)",
        "d": "n/2",
        "ans": "c"
    },
    {
        "n": 262,
        "q": "Which algorithm is used for finding the Minimum Spanning Tree?",
        "a": "Dijkstra",
        "b": "Kruskal\u2019s Algorithm",
        "c": "Floyd-Warshall",
        "d": "Bellman-Ford",
        "ans": "b"
    },
    {
        "n": 263,
        "q": "A 'Deque' stands for:",
        "a": "Double Ended Queue",
        "b": "Data Enqueued",
        "c": "Direct Entry Queue",
        "d": "Dual Element Queue",
        "ans": "a"
    },
    {
        "n": 264,
        "q": "Evaluation of prefix expression uses:",
        "a": "One Stack",
        "b": "Two Stacks",
        "c": "Queue",
        "d": "Array",
        "ans": "a"
    },
    {
        "n": 265,
        "q": "What is the best case complexity of Bubble Sort (when array is already sorted)?",
        "a": "O(n^2)",
        "b": "O(n)",
        "c": "O(log n)",
        "d": "O(1)",
        "ans": "b"
    },
    {
        "n": 266,
        "q": "Which isolation level prevents 'Dirty Reads'?",
        "a": "Read Uncommitted",
        "b": "Read Committed",
        "c": "Snapshot",
        "d": "None",
        "ans": "b"
    },
    {
        "n": 267,
        "q": "What is a 'Self Join'?",
        "a": "Joining a table with another table",
        "b": "Joining a table with itself",
        "c": "Joining two databases",
        "d": "Joining a view",
        "ans": "b"
    },
    {
        "n": 268,
        "q": "The specialized language used to query data in NoSQL databases like MongoDB is mostly based on:",
        "a": "XML",
        "b": "JSON / BSON",
        "c": "HTML",
        "d": "CSS",
        "ans": "b"
    },
    {
        "n": 269,
        "q": "What is 'Data Warehousing'?",
        "a": "Storing data on tapes",
        "b": "Process of collecting and managing data from varied sources for business insights",
        "c": "Deleting old data",
        "d": "Compressing data",
        "ans": "b"
    },
    {
        "n": 270,
        "q": "In an ER diagram, a 'Double Ellipse' represents:",
        "a": "Key Attribute",
        "b": "Derived Attribute",
        "c": "Multivalued Attribute",
        "d": "Composite Attribute",
        "ans": "c"
    },
    {
        "n": 271,
        "q": "Which SQL function returns the current system date and time?",
        "a": "NOW() or GETDATE()",
        "b": "TODAY()",
        "c": "TIME()",
        "d": "CURRENT()",
        "ans": "a"
    },
    {
        "n": 272,
        "q": "'RAID' stands for:",
        "a": "Redundant Array of Independent Disks",
        "b": "Random Access of Independent Disks",
        "c": "Rapid Access of Internal Disks",
        "d": "Read Access of Index Data",
        "ans": "a"
    },
    {
        "n": 273,
        "q": "RAID Level 1 provides:",
        "a": "Striping",
        "b": "Mirroring",
        "c": "Parity",
        "d": "Hamming Code",
        "ans": "b"
    },
    {
        "n": 274,
        "q": "Which of the following is an Aggregate Function?",
        "a": "UPPER()",
        "b": "SUBSTR()",
        "c": "AVG()",
        "d": "LEN()",
        "ans": "c"
    },
    {
        "n": 275,
        "q": "Cartesian Product of two tables with 4 rows and 5 rows respectively will have how many rows?",
        "a": "9",
        "b": "20",
        "c": "4",
        "d": "5",
        "ans": "b"
    },
    {
        "n": 276,
        "q": "Which type of failure is 'loss of data in non-volatile storage' (HDD crash)?",
        "a": "System Crash",
        "b": "Media Failure",
        "c": "Transaction Failure",
        "d": "Power Failure",
        "ans": "b"
    },
    {
        "n": 277,
        "q": "'Grant Option' allows a user to:",
        "a": "Only access data",
        "b": "Pass on the privileges to other users",
        "c": "Delete tables",
        "d": "Create backups",
        "ans": "b"
    },
    {
        "n": 278,
        "q": "Which form of dependency involves non-prime attributes depending on other non-prime attributes?",
        "a": "Functional Dependency",
        "b": "Transitive Dependency",
        "c": "Partial Dependency",
        "d": "Full Dependency",
        "ans": "b"
    },
    {
        "n": 279,
        "q": "What does OLAP stand for?",
        "a": "Online Analytical Processing",
        "b": "Online Advanced Processing",
        "c": "Offline Analytical Processing",
        "d": "Online Application Protocol",
        "ans": "a"
    },
    {
        "n": 280,
        "q": "The 'Cartesian Product' in SQL is returned by which join if no condition is specified?",
        "a": "INNER JOIN",
        "b": "CROSS JOIN",
        "c": "LEFT JOIN",
        "d": "OUTER JOIN",
        "ans": "b"
    },
    {
        "n": 281,
        "q": "RISC stands for:",
        "a": "Reduced Instruction Set Computer",
        "b": "Rapid Instruction Set Computer",
        "c": "Random Instruction Set Computer",
        "d": "Reliable Instruction Set Computer",
        "ans": "a"
    },
    {
        "n": 282,
        "q": "The register that keeps track of the next instruction to be executed is:",
        "a": "Accumulator",
        "b": "Program Counter (PC)",
        "c": "Instruction Register (IR)",
        "d": "Stack Pointer",
        "ans": "b"
    },
    {
        "n": 283,
        "q": "What is 'Cache Hit'?",
        "a": "Data is found in Cache Memory",
        "b": "Data is not found in Cache",
        "c": "Cache is full",
        "d": "Cache is corrupted",
        "ans": "a"
    },
    {
        "n": 284,
        "q": "Which addressing mode allows the operand to be specified directly in the instruction?",
        "a": "Direct Addressing",
        "b": "Immediate Addressing",
        "c": "Indirect Addressing",
        "d": "Register Addressing",
        "ans": "b"
    },
    {
        "n": 285,
        "q": "'DMA' stands for:",
        "a": "Direct Memory Access",
        "b": "Dynamic Memory Access",
        "c": "Dual Memory Architecture",
        "d": "Disk Memory Allocation",
        "ans": "a"
    },
    {
        "n": 286,
        "q": "Which disk scheduling algorithm moves the head from one end to the other, servicing requests (Elevator Algorithm)?",
        "a": "FCFS",
        "b": "SSTF",
        "c": "SCAN",
        "d": "LOOK",
        "ans": "c"
    },
    {
        "n": 287,
        "q": "In Linux, 'cron' is used for:",
        "a": "File management",
        "b": "Process scheduling (Time-based job scheduler)",
        "c": "User management",
        "d": "Network configuration",
        "ans": "b"
    },
    {
        "n": 288,
        "q": "Which file system is used by Windows?",
        "a": "EXT4",
        "b": "NTFS",
        "c": "HFS+",
        "d": "ZFS",
        "ans": "b"
    },
    {
        "n": 289,
        "q": "'System Call' provides an interface between:",
        "a": "Process and Operating System",
        "b": "User and Hardware",
        "c": "Hardware and Software",
        "d": "Two Processes",
        "ans": "a"
    },
    {
        "n": 290,
        "q": "What is 'Demand Paging'?",
        "a": "Loading all pages at once",
        "b": "Loading a page only when it is needed",
        "c": "Swapping out all pages",
        "d": "Deleting pages",
        "ans": "b"
    },
    {
        "n": 291,
        "q": "What is the port number for SSH?",
        "a": "21",
        "b": "22",
        "c": "23",
        "d": "25",
        "ans": "b"
    },
    {
        "n": 292,
        "q": "Which protocol is used for transferring files securely?",
        "a": "FTP",
        "b": "SFTP",
        "c": "TFTP",
        "d": "SMTP",
        "ans": "b"
    },
    {
        "n": 293,
        "q": "Which layer is responsible for 'Token Management'?",
        "a": "Session Layer",
        "b": "Network Layer",
        "c": "Transport Layer",
        "d": "Physical Layer",
        "ans": "a"
    },
    {
        "n": 294,
        "q": "192.168.1.1 belongs to which IP Class?",
        "a": "Class A",
        "b": "Class B",
        "c": "Class C",
        "d": "Class D",
        "ans": "c"
    },
    {
        "n": 295,
        "q": "'Parity Bit' is used for:",
        "a": "Encryption",
        "b": "Error Detection (Single bit)",
        "c": "Compression",
        "d": "Indexing",
        "ans": "b"
    },
    {
        "n": 296,
        "q": "What is the size of an ATM cell?",
        "a": "53 bytes",
        "b": "64 bytes",
        "c": "48 bytes",
        "d": "32 bytes",
        "ans": "a"
    },
    {
        "n": 297,
        "q": "Which device reduces broadcast traffic in a network?",
        "a": "Hub",
        "b": "Switch (VLANs) / Router",
        "c": "Repeater",
        "d": "Cable",
        "ans": "b"
    },
    {
        "n": 298,
        "q": "'Beacons' are used in:",
        "a": "Ethernet",
        "b": "Token Ring / Wireless LANs",
        "c": "Bus Topology",
        "d": "Star Topology",
        "ans": "b"
    },
    {
        "n": 299,
        "q": "Start of Frame Delimiter (SFD) is used in:",
        "a": "Ethernet Frame",
        "b": "IP Packet",
        "c": "TCP Segment",
        "d": "UDP Datagram",
        "ans": "a"
    },
    {
        "n": 300,
        "q": "Which protocol uses 'Windowing' for flow control?",
        "a": "UDP",
        "b": "TCP",
        "c": "IP",
        "d": "ICMP",
        "ans": "b"
    },
    {
        "n": 301,
        "q": "HTML tags are enclosed in:",
        "a": "{}",
        "b": "()",
        "c": "<>",
        "d": "[]",
        "ans": "c"
    },
    {
        "n": 302,
        "q": "Which status code indicates \"Internal Server Error\"?",
        "a": "404",
        "b": "200",
        "c": "500",
        "d": "503",
        "ans": "c"
    },
    {
        "n": 303,
        "q": "CSS stands for:",
        "a": "Computer Style Sheets",
        "b": "Creative Style Sheets",
        "c": "Cascading Style Sheets",
        "d": "Colorful Style Sheets",
        "ans": "c"
    },
    {
        "n": 304,
        "q": "Which HTTP method is idempotent (safe to repeat)?",
        "a": "POST",
        "b": "GET",
        "c": "CONNECT",
        "d": "None",
        "ans": "b"
    },
    {
        "n": 305,
        "q": "'Cookies' are stored on the:",
        "a": "Server side",
        "b": "Client side (Browser)",
        "c": "Database",
        "d": "Network",
        "ans": "b"
    },
    {
        "n": 306,
        "q": "JSON stands for:",
        "a": "Java Standard Object Notation",
        "b": "JavaScript Object Notation",
        "c": "Java Script Option Notation",
        "d": "Java Syntax Object Name",
        "ans": "b"
    },
    {
        "n": 307,
        "q": "What does DOM stand for?",
        "a": "Data Object Model",
        "b": "Document Object Model",
        "c": "Digital Object Method",
        "d": "Dynamic Object Main",
        "ans": "b"
    },
    {
        "n": 308,
        "q": "Which is a server-side scripting language?",
        "a": "HTML",
        "b": "CSS",
        "c": "PHP",
        "d": "XML",
        "ans": "c"
    },
    {
        "n": 309,
        "q": "REST API usually uses which format for data exchange?",
        "a": "XML",
        "b": "JSON",
        "c": "HTML",
        "d": "Text",
        "ans": "b"
    },
    {
        "n": 310,
        "q": "What is 'Local Storage' in HTML5?",
        "a": "Cookies",
        "b": "Storage on server",
        "c": "Storage on client browser with no expiration",
        "d": "Session storage",
        "ans": "c"
    },
    {
        "n": 311,
        "q": "'Regression Testing' is performed:",
        "a": "To check new features",
        "b": "To ensure changes haven't broken existing functionality",
        "c": "Before coding",
        "d": "By users",
        "ans": "b"
    },
    {
        "n": 312,
        "q": "Capability Maturity Model (CMM) levels range from:",
        "a": "1 to 5",
        "b": "1 to 10",
        "c": "0 to 5",
        "d": "A to F",
        "ans": "a"
    },
    {
        "n": 313,
        "q": "Which model is risk-driven?",
        "a": "Waterfall",
        "b": "Spiral",
        "c": "V-Model",
        "d": "Agile",
        "ans": "b"
    },
    {
        "n": 314,
        "q": "'Black Box Testing' is also known as:",
        "a": "Structural Testing",
        "b": "Behavioral Testing",
        "c": "Glass Box Testing",
        "d": "Unit Testing",
        "ans": "b"
    },
    {
        "n": 315,
        "q": "The person responsible for removing obstacles in Scrum is:",
        "a": "Product Owner",
        "b": "Scrum Master",
        "c": "Developer",
        "d": "Stakeholder",
        "ans": "b"
    },
    {
        "n": 316,
        "q": "'Cyclomatic Complexity' measures:",
        "a": "Code size",
        "b": "Code complexity (Linearly independent paths)",
        "c": "Code speed",
        "d": "Memory usage",
        "ans": "b"
    },
    {
        "n": 317,
        "q": "SDLC phase where the product is actually built:",
        "a": "Design",
        "b": "Coding / Implementation",
        "c": "Testing",
        "d": "Maintenance",
        "ans": "b"
    },
    {
        "n": 318,
        "q": "'Beta' software refers to:",
        "a": "The final version",
        "b": "A pre-release version for external testing",
        "c": "A virus",
        "d": "An internal tool",
        "ans": "b"
    },
    {
        "n": 319,
        "q": "UAT stands for:",
        "a": "User Application Test",
        "b": "User Acceptance Testing",
        "c": "Uniform Access Testing",
        "d": "Universal Application Tool",
        "ans": "b"
    },
    {
        "n": 320,
        "q": "Which diagram shows the dynamic behavior of a system?",
        "a": "Class Diagram",
        "b": "Sequence Diagram",
        "c": "Component Diagram",
        "d": "Deployment Diagram",
        "ans": "b"
    },
    {
        "n": 321,
        "q": "In Python, `lambda` functions are:",
        "a": "Global functions",
        "b": "Anonymous (nameless) functions",
        "c": "Recursive functions",
        "d": "Constructors",
        "ans": "b"
    },
    {
        "n": 322,
        "q": "Which library is used for data manipulation in Python?",
        "a": "NumPy",
        "b": "Pandas",
        "c": "Matplotlib",
        "d": "Scikit-learn",
        "ans": "b"
    },
    {
        "n": 323,
        "q": "'Docker' is a tool used for:",
        "a": "Virtualization",
        "b": "Containerization",
        "c": "Compilation",
        "d": "Networking",
        "ans": "b"
    },
    {
        "n": 324,
        "q": "Which type of Blockchain is Bitcoin?",
        "a": "Private",
        "b": "Public",
        "c": "Consortium",
        "d": "Hybrid",
        "ans": "b"
    },
    {
        "n": 325,
        "q": "'Hadoop' is related to:",
        "a": "Cloud Storage",
        "b": "Big Data Processing",
        "c": "IoT",
        "d": "Blockchain",
        "ans": "b"
    },
    {
        "n": 326,
        "q": "In ML, a 'Confusion Matrix' is used to evaluate:",
        "a": "Regression models",
        "b": "Classification models",
        "c": "Clustering",
        "d": "Reinforcement learning",
        "ans": "b"
    },
    {
        "n": 327,
        "q": "'Kubernetes' is used for:",
        "a": "Container Orchestration",
        "b": "Coding",
        "c": "Database management",
        "d": "Operating System",
        "ans": "a"
    },
    {
        "n": 328,
        "q": "Which of the following is NOT a NoSQL database?",
        "a": "MongoDB",
        "b": "Cassandra",
        "c": "Redis",
        "d": "MySQL",
        "ans": "d"
    },
    {
        "n": 329,
        "q": "What is 'Edge Computing'?",
        "a": "Computing in the cloud",
        "b": "Computing near the source of data (edge of network)",
        "c": "Computing on supercomputers",
        "d": "Offline computing",
        "ans": "b"
    },
    {
        "n": 330,
        "q": "'Phishing' is an attempt to:",
        "a": "Secure data",
        "b": "Acquire sensitive info by masquerading as a trustworthy entity",
        "c": "Speed up internet",
        "d": "Test software",
        "ans": "b"
    },
    {
        "n": 331,
        "q": "C++: What is the size of an empty class?",
        "a": "0",
        "b": "1 byte",
        "c": "2 bytes",
        "d": "4 bytes",
        "ans": "b"
    },
    {
        "n": 332,
        "q": "Python: `print(type(5/2))` output?",
        "a": "int",
        "b": "float",
        "c": "double",
        "d": "decimal",
        "ans": "b"
    },
    {
        "n": 333,
        "q": "Which bitwise operator checks if a number is odd/even?",
        "a": "& (AND)",
        "b": "| (OR)",
        "c": "^ (XOR)",
        "d": "~ (NOT)",
        "ans": "a"
    },
    {
        "n": 334,
        "q": "Logic: If P implies Q, then Not Q implies:",
        "a": "P",
        "b": "Not P",
        "c": "Q",
        "d": "True",
        "ans": "b"
    },
    {
        "n": 335,
        "q": "A function calling itself is called:",
        "a": "Looping",
        "b": "Recursion",
        "c": "Iteration",
        "d": "Nesting",
        "ans": "b"
    },
    {
        "n": 336,
        "q": "The complexity of `merging` two sorted arrays of size M and N is:",
        "a": "O(M*N)",
        "b": "O(M+N)",
        "c": "O(log M)",
        "d": "O(1)",
        "ans": "b"
    },
    {
        "n": 337,
        "q": "Prefix notation is also known as:",
        "a": "Polish Notation",
        "b": "Reverse Polish Notation",
        "c": "Infix",
        "d": "Postfix",
        "ans": "a"
    },
    {
        "n": 338,
        "q": "ASCII value of '0' (zero char) is:",
        "a": "0",
        "b": "48",
        "c": "32",
        "d": "65",
        "ans": "b"
    },
    {
        "n": 339,
        "q": "`i = 10; printf(\"%d\", i--);` prints:",
        "a": "9",
        "b": "10",
        "c": "11",
        "d": "Error",
        "ans": "b"
    },
    {
        "n": 340,
        "q": "What is 'Segmentation Fault'?",
        "a": "Hard disk error",
        "b": "Accessing memory not allocated to the program",
        "c": "Compiler error",
        "d": "Syntax error",
        "ans": "b"
    },
    {
        "n": 341,
        "q": "Which key is kept secret in Asymmetric Encryption?",
        "a": "Public Key",
        "b": "Private Key",
        "c": "Session Key",
        "d": "Shared Key",
        "ans": "b"
    },
    {
        "n": 342,
        "q": "'Ransomware' is a type of malware that:",
        "a": "Steals passwords",
        "b": "Encrypts user data and demands payment",
        "c": "Shows ads",
        "d": "Slows down PC",
        "ans": "b"
    },
    {
        "n": 343,
        "q": "HTTPS uses which protocol for security?",
        "a": "SSL/TLS",
        "b": "SSH",
        "c": "IPSec",
        "d": "PGP",
        "ans": "a"
    },
    {
        "n": 344,
        "q": "A 'Botnet' is:",
        "a": "A network of robots",
        "b": "A network of infected computers controlled by an attacker",
        "c": "A fast internet",
        "d": "A firewall",
        "ans": "b"
    },
    {
        "n": 345,
        "q": "'Salting' passwords means:",
        "a": "Encrypting them twice",
        "b": "Adding random data to password before hashing",
        "c": "Storing them in plain text",
        "d": "Hiding them",
        "ans": "b"
    },
    {
        "n": 346,
        "q": "Which attack tries all possible combinations of passwords?",
        "a": "Dictionary Attack",
        "b": "Brute Force Attack",
        "c": "Phishing",
        "d": "SQL Injection",
        "ans": "b"
    },
    {
        "n": 347,
        "q": "'VPN' creates a:",
        "a": "Public tunnel",
        "b": "Secure, encrypted tunnel over a public network",
        "c": "Faster connection",
        "d": "Local Area Network",
        "ans": "b"
    },
    {
        "n": 348,
        "q": "Which is considered a strong password?",
        "a": "password123",
        "b": "admin@123",
        "c": "Tr0ub4dor&3",
        "d": "12345678",
        "ans": "c"
    },
    {
        "n": 349,
        "q": "'Social Engineering' targets:",
        "a": "Software bugs",
        "b": "Hardware flaws",
        "c": "Human psychology / manipulation",
        "d": "Network protocols",
        "ans": "c"
    },
    {
        "n": 350,
        "q": "Two-Factor Authentication (2FA) relies on:",
        "a": "Only password",
        "b": "Something you know + Something you have/are",
        "c": "Two passwords",
        "d": "Fingerprint only",
        "ans": "b"
    }
];
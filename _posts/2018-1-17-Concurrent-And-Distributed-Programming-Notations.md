---
layout: post
title: "Notations Of Concurrent And Distributed Programming"
author: Erkan Ceylan
id: 12
category: "Yazılım"
coverPhoto: https://user-images.githubusercontent.com/9788440/35019354-baf8e6fa-fb26-11e7-84b2-a9dc5a5792e0.png
---

![Photo of Main](https://user-images.githubusercontent.com/9788440/35019354-baf8e6fa-fb26-11e7-84b2-a9dc5a5792e0.png)

I am taking a Concurrent and Distributed Programming lecture in my Erasmus+ journey. End of the lecture, there will be final exam
about mostly explation of some notations concerning Concerning Concurrent And Distributed Programming. Hence I decided write whole
notation in this lecture here. 

Process: is an instance of a computer program that is being executed. It contains the program code and its current activity

Thread: is the smallest sequence of programmed instructions that can be managed independently by a scheduler, which is typically a part of the operating system.

Parallel ↔ processes overlap in time (they are executed on different processors)

Concurrent ↔ processes can overlap in time but not necessary (they are executed on one or more processors).

Distributed ↔ processes overlap in time (they are executed on
distributed processors, for example, in
computer clusters) .


	– distributed system → computers in the network
	(Internet)
	– parallel system → multicore processors


Flynn's taxonomy for a classification of computer
architectures

Flynn's taxonomy is a classification of computer architectures

    • SISD (Single Instruction Stream – Single Data Stream)
      von Neumann Architecture.
    • MIMD (Multiple Instruction Stream – Multiple Data Stream)
      Multiprocessor Systems.
    • SIMD (Single Instruction Stream – Multiple Data Stream)
      Vector Processors.
    • MISD (Multiple Instruction Stream – Single Data Stream)
      Distributed systems.


Critical section: In concurrent programming, a critical section is a part of a multi-process (multi-thread) program that may not be concurrently executed by more than one of the program's processes (threads). In other words, it is a piece of a program that requires mutual exclusion of access.

mutual exclusion: is a property of concurrency control, which is instituted for the purpose of preventing race conditions; it is the requirement that one thread of execution never enter its critical section at the same time that another concurrent thread of execution enters its own critical section.


Deadlock: In concurrent programming, a deadlock is a situation in which two or
more competing actions are each waiting for the other to finish, and
thus neither ever does.

Semaphore: an abstract data type that is used for controlling access, by multiple processes, to a common resource in a concurrent system.

Cyclic Barrier:  A class that is used to implement a scenario where one thread waits for one or more threads to complete there job before starts processing.


Notations: Critical Section, Remote, ORB
Groups: Multithread Programming, RMI, CORBA

3 Tasks: Multi-thread program, Socket-based program, JSP program.

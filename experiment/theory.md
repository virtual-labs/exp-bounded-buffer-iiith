### Link your theory in here

## Semaphores:
They are simply non negative integer variables shared across all threads.They are used to solve the critical section problem and used to achieve process synchronization in the multiprocessing environment.

We have to standard operation:
* Wait():to test
* signal():to increment

There are two types of semaphores:
* Binary:
  - values are 0 and 1
  - known as mutex locks
  - Used to provide mutual exclusion
* Counting:
  - Values range over an unrestricted domain
  - Used to control resources that have multiple instances

## Bounded buffer:
* This is a classic problem in synchronization
* It is also called producer consumer problem
* Let us take a buffer of n size and each slot in it is capable of holding 1 unit of data
* We have two processes operating on buffer:
  - Producer:produce and store data to the buffer
  - Consumer:consumes or removes data from the buffer

* We will have to address three issues in regards to the bounded buffer problem:
  - When the producer or consumer is running the other process can not be run
  - The producer can only fill the buffer if there are empty slots
  - The consumer can only empty the buffer if there are any full slots
* To solve this problem we will make use of 3 semaphores:
  - m(mutex):a binary semaphore which will be used to acquire and release the lock 
  - Empty: a counting semaphore used to keep track of the empty slots.starts at n
  - Full: a counting semaphore used to keep track of all the slots that are full.starts at 0


![Screenshot from 2022-11-07 16-48-01](https://user-images.githubusercontent.com/110168104/200297676-6b330238-9b2a-4ed1-ad10-c314a6cbb883.png)

![Screenshot from 2022-11-07 16-48-17](https://user-images.githubusercontent.com/110168104/200297793-b34f09a3-b5cb-4367-888f-85b88ad0c98d.png)



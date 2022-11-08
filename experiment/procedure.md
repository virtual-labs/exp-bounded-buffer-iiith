### Procedure

You will be able to see 4 components:
* Producer: will show what stage the producer process is currently in
* Consumer: will show which stage the consumer process is currently in
Semaphores:
* Full: used to keep track of filled slots
* Empty: used to keep track of empty slot
* Mutex: used to lock the process
Controls
* NextP: used to push the stage forward in produser
* NextC: used to push the stage forward in consumer
* Advance clock: used to advance the clock cycle


1. If we receive an instruction saying that a producer wants to fill a slot we will click nextP to push the producer process through the various stages:
   - Generating: 
   - wait(empty): The purpose of this stage is to make sure that there are empty slots into which the producer can fill data into,if that is the case then the value of empty semaphore is decremented by 1
   - wait(mutex): the purpose of this stage is to request locking this process in
   - Producing: the purpose of this stage is to fill the actual slot in
   - signal(mutex): this stage is to release the lock on the process so that if needed then another process can be started
   - signal(full): this stage increments the full semaphore by one.

2. If we receive the instruction that the consumer is ready to consume slots we will press nextC to push it through the stages of the consumer process:
   - wait(full): the purpose of this stage is to make sure that the semaphore is greater than 0, meaning there is a full slot that the process can consume from.Here the semaphore value of full decrements by 1.
   - wait(mutex): the purpose of this stage is to request locking this process in
   - Consuming: Once the process is locked in, the consumption process of a slot is done i.e. we are removing data from that slot.
   - signal(mutex): this stage is to release the lock on the process so that if needed then another process can be started
   - signal(empty): this stage will increment the semaphore empty by 1.
   - using:

![Screenshot from 2022-11-08 15-03-17](https://user-images.githubusercontent.com/110168104/200529545-7d7f5f74-b489-4108-97b4-252d47766617.png)
![Screenshot from 2022-11-08 15-03-44](https://user-images.githubusercontent.com/110168104/200528623-4d3399fe-90d9-416a-bed0-9327d51e0fb7.png)

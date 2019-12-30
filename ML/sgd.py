import numpy as np
import random

def mbgd(size,a,iter,asize):
    for i in range(0,iter):
        np.random.shuffle(a)
        min_batch=[a[j:j+size] for j in range(0,asize,size)]
        for x in min_batch:
            print(x)

asize=8
features= 5
iter =2
size=2
data=np.random.randn(asize,features)
print(data)
mbgd(size,data,iter,asize)
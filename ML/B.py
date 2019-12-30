import numpy as np

a=[2,3,1]
print(len(a))
print(a)
print(a[:-1])
b=[np.random.randn(y,1) for y in a[1:]]
print(b)
c=[np.random.randn(y,x) for x,y in zip(a[:-1],a[1:])]
print(c)
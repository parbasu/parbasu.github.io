My website only consists of this one single blog post written below. All of my other write-ups and projects can be found on my GitHub profile. In the future I might expand this website to include those write-ups and projects, but as of now I think it's unnecessary work.

--- 

# Mean, Median and Mode

Most of us are familiar with the term *average*. So if I tell you that the average age of students in a statistics class at university is $19.25$ years, you know that

$$19.25 = \frac{\text{sum of the ages of all students who are in the class}}{\text{number of students in the class}}$$

More formally, we have the following definition. 

$\textbf{Definition}$ For a data set $A$ consisting of numerical values $x_1, x_2, \dots, x_n$, the **mean** or **average** of $A$ is given by

$$ \text{mean}(A) = \frac{1}{n} \sum_{i=1}^{n} x_i.$$

Mean is a single numerical value that summarizes the data set. So if somebody comes up to me and asks me about the age of students in the statistics class, instead of telling them the age of every single student in the class, it is better to just tell them the average age, which is a single numerical value that summarizes the entire data set of students' ages.

Whenever we summarize any kind of information there is always going to be information loss. A summary of a movie will not contain the intricate plot details. Analogously, the mean age of students does not tell us how the age is distributed. If I tell you that the mean is $19.25$, can you tell me the age of every single student in the class? Of course not! More than $1$ data set has the mean $19.25$

$$ \frac{18 + 21 +  20 + 18}{4}  = 19.25 = \frac{19+20+19+19}{4}$$

But you may be able to give some estimate, because you are making some implicit assumptions about the data set. You might reasonably assume that almost all the ages lie somewhere between $18$ and $25$, given the fact that this is a university class. So the implicit asummptions about *minimum*, *maximum* and *range (= maximum - minimum)* along with mean allows you to give an estimate.

Another, perhaps less familiar, numerical summary measure is the *median*.

Briefly, the median is the *middle* number of a data set. For example, if we have the following student age data set consisting of $7$ values ordered from smallest to greatest

$$ 17, 18, 18, 18, 24, 25,30, $$

its median is $18$, the fourth value in the data set. If instead our data set had an even number of values, say the following $8$ values

$$17, 18, 18, 18, 19, 24, 25,30,$$

its median would be the average of the middle two, as there is no single middle value. So it would be $\frac{18+19}{2} = 18.5$.

More formally, we have the following definition.


$\textbf{Definition}$ Let $A$ be a data set consisting of numerical values $x_1,x_2, \dots, x_n$. We assume the following holds

$$x_{1} < x_{2} < \cdots < x_{n}.$$

If not, we can always rearrange the values so the above relations holds. The **mode** of $A$ is then given by 

- $\text{median}(A) = x_{\frac{n+1}{2}}$, if $n$ is odd. 


- $\text{median}(A) = \frac{1}{2} \big(x_{\lfloor\frac{n+1}{2} \rfloor} + x_{\lceil \frac{n+1}{2} \rceil} \big)$, if $n$ is even.

Here $\lfloor \cdot \rfloor $ and $\lceil \cdot \rceil$ are the *floor* and *ceiling* functions respectively. Floor function takes a real number $x$ as input, and outputs the greatest integer less than or equal to $x$. Similary, the ceiling function takes $x$ as input and outputs the smallest integer greater than or equal to $x$. 

The formal definition may seem a bit abstract so let's work through the above examples again, but this time keeping the definition in mind. For

$$ 17, 18, 18, 18, 24, 25,30, $$

$n=7$, which is odd, so the median $x_{\frac{7+1}{2}} = x_4 = 18$.

For 

$$17, 18, 18, 18, 19, 24, 25,30,$$

$n=8$, which is even, so the median is 

$$\begin{aligned}
&\frac{1}{2} \big(x_{\lfloor\frac{8+1}{2} \rfloor} + x_{\lceil \frac{8+1}{2} \rceil} \big) \\
= &\frac{1}{2} \big(x_{\lfloor 4.5 \rfloor} + x_{\lceil 4.5 \rceil} \big) \\
=& \frac{1}{2} \big(x_{4} + x_{5} \big)  = \frac{1}{2} (18 + 19) = 18.5. 
\end{aligned}$$

Here $\lfloor 4.5 \rfloor = 4$ as $4$ is the greatest integer less than or equal to $4.5$. $\lceil 4.5 \rceil = 5$ as $5$ is the smallest integer greater than or equal to $4.5$. 


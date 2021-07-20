# Junior Frontend Developer

## Karim Idrisov

## My contacts
**Telephone** - 89502858568

**Email** - karim.idrisow2016@gmail.com

**GitHub** - https://github.com/KarimIdrisov

## About me

My teaching goal is to make my family happy. I was fascinated by the computer since childhood, but I could not use it correctly, and spent a lot of time playing games. Now I want to work and develop in the direction of frontend development.

I am currently studying at the Far Eastern Federal University for the 3rd year. During my studies, many projects were completed. Also, courses such as web programming and computer graphic were taken.

## Skills 

 - JavaScript, Python, TypeScript, SQL
 - HTML, CSS, SASS/SCSS, BEM
 - ReactJS, Vue, Node JS
 - Material UI, Chart JS, Victory, Highcharts
 - Git, GitHub

## Code Example

```javascript
// Count linear superposition of two signals
export default function linearSuperposition(time, models, samples, fd, first, args, notObject = false) {
    const dataTmp = []
    const res = []
    
    for (let i = 0; i < samples; i++) {
        res.push(0)
    }
    
    for (let i = 0; i < args.split(";").length; i++) {
        for (let j = 0; j < samples; j++) {
            res[j] += +models[i][j] * +args.split(';')[i]
        }
    }

    if (notObject) {
        for (let i = 0; i < samples; i++) {
            dataTmp.push(+first + +res[i])
        }
        return dataTmp
    } else {
        for (let i = 0; i < samples; i++) {
            dataTmp.push({
                'y': +first + +res[i],
                'x': (new Date(time.getTime() + (i * (1 / fd)) * 1000)).getTime()
            })
        }
        return dataTmp
    }
}
```
## Experience

* Courses: Stepik - Web development for beginners: HTML and CSS.
* Projects
  * [F1 Statistic](https://github.com/KarimIdrisov/f1statistic) - a site with statistics according to formula 1. The site is written on React JS and uses the F1 API to get data. 
  * [CGP](https://github.com/KarimIdrisov/cgp) – site for signal analysis. Frontend on React, backend on Node JS.
  
## Education

* 2019–currently – Far Eastern Federal University. Specialty: "Applied Mathematics and Computer Science"

## Languages

* English - Upper Intermediate (B2).


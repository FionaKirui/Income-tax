![alt text](https://github.com/FionaKirui/Income-tax/blob/gh-pages/images/readme/tax_planning_banner.jpg)
# Income Tax Rates in Kenya(old and new rates)
----------------------------------------------------------------------------------------------------
Pplanning for you taxes can be stressful both as an employer and employee. That is why we came up with this online income tax calculator to help you do your monthly taxes for you without the stress of so much math.
This is a basic Income tax calculator with functionality allowng you to calculate your monthly taxes using the old rates and new rates to be effected on January 2017.
The most basic variables are considered to calculate this income tax and they include: 
 - PAYE
 - NSSF
 - NHIF
 - GrossIncome

# BDD
The Specifications using old nssf rates and variables to consider include:

| Behavior | Input Example | Output Example(old nssf rates) | Output Example(new nssf rates) |
| ---------| ------------- | ------------------------------ | ------------------------------ |
| nssf is a constant of 200 for old rate and 6% of gross with a max of 1080 for new rates | 53000 | 200 | 1080 |
| nhif is a value based on your gross income bracket | 53000 | 1200 | 1200 |
| personal relief is a constant for anyone liable to pay taxes | 53000 | 1162  | 1162 |
| taxable pay is grossIncome less  deductions(nssf) | 53000 | 52800 | 51920 |
| paye is the taxable pay less personal relief | 53000 | 9,772 | 9508.10 |
| netpay is a function of nhif, nssf,paye and grossIncome | 53000 | 41,828 | 411211 |
| effective tax rate is a function of paye and grossIncome | 53000 | 18.44% | 17.94% |

## Features
It is built using HTML and CSS; Bootstrap; JavaScript and jQuery.

## Live Website 
View the complete site [here]()

## Contributors
 - Fiona Kirui
 - Sophia Murage	

## License
---------
### MIT License

Copyright (c) [2016] [Sophia Njeri Murage & Fiona Kirui]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### Contact Information
Sophia -
Fiona -


function rand(n){var a=(new Date).getTime();return a=(9301*a+49297)%233280,a/=233280,Math.ceil(a*n)}window.utils={rand:rand};
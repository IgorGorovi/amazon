
    Implements the NAIVE tracking and ranking functionality as stated

    ASSUMPTION:

    Only one page can exist in one rank for getTopNPages() method
    Therefore, the scheme I have adopted is that the last visited page will replace another equally ranked page.

    In other words, only one page can sit in one rank

    SAMPLE OUTPUT:

    For the following mock access the output for a call to

    1. webA.getTopNPages(2):     [ 'google.com', 'yahoo.com' ]
    2. webA.getTopNPages(1): [ 'google.com' ]

    REQUIREMENTS:
    You need node js to run this code


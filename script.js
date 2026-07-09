// here be dragons (ignore my messy code please)

const ascii = `<pre><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgb(252,251,250)">.</span><span style="color:rgb(254,255,251)">.</span><span style="color:rgb(247,255,251)">.</span><span style="color:rgb(254,253,254)">.</span><span style="color:rgb(254,254,255)">.</span><span style="color:rgb(252,252,251)">.</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span>
<span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgb(255,254,253)">.</span><span style="color:rgb(253,253,251)">.</span><span style="color:rgb(0,144,4)">%</span><span style="color:rgb(5,139,4)">%</span><span style="color:rgb(254,253,253)">.</span><span style="color:rgb(255,254,255)">.</span><span style="color:rgb(255,255,253)">.</span><span style="color:rgb(255,251,253)">.</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span>
<span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgb(254,253,253)">.</span><span style="color:rgb(254,252,250)">.</span><span style="color:rgb(77,140,5)">?</span><span style="color:rgb(76,142,1)">?</span><span style="color:rgb(0,142,82)">%</span><span style="color:rgb(0,143,83)">?</span><span style="color:rgb(247,255,251)">.</span><span style="color:rgb(254,254,249)">.</span><span style="color:rgb(251,255,252)">.</span><span style="color:rgb(254,254,250)">.</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span>
<span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgb(253,252,254)">.</span><span style="color:rgb(254,252,253)">.</span><span style="color:rgb(255,253,251)">.</span><span style="color:rgb(254,252,254)">.</span><span style="color:rgb(254,252,254)">.</span><span style="color:rgb(255,253,253)">.</span><span style="color:rgb(253,253,254)">.</span><span style="color:rgb(254,254,249)">.</span><span style="color:rgb(76,144,1)">?</span><span style="color:rgb(84,141,3)">?</span><span style="color:rgb(6,137,1)">%</span><span style="color:rgb(3,140,5)">%</span><span style="color:rgb(251,255,254)">.</span><span style="color:rgb(254,253,254)">.</span><span style="color:rgb(252,254,251)">.</span><span style="color:rgb(253,254,252)">.</span><span style="color:rgb(255,251,252)">.</span><span style="color:rgb(254,251,255)">.</span><span style="color:rgb(253,255,253)">.</span><span style="color:rgb(253,253,252)">.</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span>
<span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgb(253,254,254)">.</span><span style="color:rgb(254,254,242)">.</span><span style="color:rgb(253,252,255)">.</span><span style="color:rgb(254,252,253)">.</span><span style="color:rgb(150,83,0)">?</span><span style="color:rgb(146,85,1)">?</span><span style="color:rgb(146,83,3)">%</span><span style="color:rgb(148,82,3)">?</span><span style="color:rgb(146,66,12)">%</span><span style="color:rgb(147,66,8)">%</span><span style="color:rgb(0,143,0)">%</span><span style="color:rgb(4,141,2)">%</span><span style="color:rgb(70,143,9)">?</span><span style="color:rgb(81,142,4)">?</span><span style="color:rgb(151,85,0)">?</span><span style="color:rgb(141,87,6)">?</span><span style="color:rgb(150,63,13)">%</span><span style="color:rgb(148,66,9)">%</span><span style="color:rgb(145,80,2)">%</span><span style="color:rgb(143,86,17)">?</span><span style="color:rgb(249,255,251)">.</span><span style="color:rgb(247,255,254)">.</span><span style="color:rgb(255,255,251)">.</span><span style="color:rgb(250,250,252)">.</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span>
<span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgb(254,254,250)">.</span><span style="color:rgb(249,252,255)">.</span><span style="color:rgb(147,79,4)">%</span><span style="color:rgb(147,78,4)">%</span><span style="color:rgb(253,162,25)">;</span><span style="color:rgb(253,164,23)">;</span><span style="color:rgb(253,146,0)">+</span><span style="color:rgb(252,148,1)">;</span><span style="color:rgb(253,164,22)">;</span><span style="color:rgb(247,166,30)">;</span><span style="color:rgb(81,142,0)">?</span><span style="color:rgb(82,142,3)">?</span><span style="color:rgb(2,143,77)">?</span><span style="color:rgb(6,142,77)">?</span><span style="color:rgb(251,165,20)">;</span><span style="color:rgb(255,162,20)">;</span><span style="color:rgb(255,147,0)">;</span><span style="color:rgb(255,146,4)">;</span><span style="color:rgb(252,133,4)">+</span><span style="color:rgb(250,129,5)">+</span><span style="color:rgb(147,66,9)">%</span><span style="color:rgb(135,71,22)">%</span><span style="color:rgb(255,255,251)">.</span><span style="color:rgb(249,248,252)">.</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span>
<span style="color:rgb(253,253,254)">.</span><span style="color:rgb(254,255,250)">.</span><span style="color:rgb(253,255,254)">.</span><span style="color:rgb(250,254,255)">.</span><span style="color:rgb(148,81,1)">%</span><span style="color:rgb(148,78,6)">%</span><span style="color:rgb(255,144,3)">+</span><span style="color:rgb(255,146,2)">+</span><span style="color:rgb(254,135,34)">+</span><span style="color:rgb(253,135,28)">+</span><span style="color:rgb(146,65,9)">%</span><span style="color:rgb(147,67,9)">%</span><span style="color:rgb(252,149,0)">;</span><span style="color:rgb(253,148,0)">;</span><span style="color:rgb(255,164,18)">;</span><span style="color:rgb(253,162,26)">;</span><span style="color:rgb(151,80,0)">%</span><span style="color:rgb(148,80,2)">%</span><span style="color:rgb(255,137,28)">+</span><span style="color:rgb(254,136,28)">+</span><span style="color:rgb(253,147,1)">+</span><span style="color:rgb(243,148,4)">+</span><span style="color:rgb(146,81,2)">%</span><span style="color:rgb(142,82,13)">%</span><span style="color:rgb(254,254,250)">.</span><span style="color:rgb(255,253,254)">.</span><span style="color:rgb(254,254,251)">.</span><span style="color:rgb(242,241,248)">.</span>
<span style="color:rgb(255,254,248)">.</span><span style="color:rgb(250,254,253)">.</span><span style="color:rgb(144,67,9)">%</span><span style="color:rgb(144,67,12)">%</span><span style="color:rgb(253,148,2)">;</span><span style="color:rgb(252,148,2)">;</span><span style="color:rgb(250,164,30)">;</span><span style="color:rgb(254,164,23)">;</span><span style="color:rgb(253,146,0)">+</span><span style="color:rgb(253,148,1)">;</span><span style="color:rgb(145,82,0)">%</span><span style="color:rgb(147,80,0)">%</span><span style="color:rgb(255,134,1)">+</span><span style="color:rgb(252,134,1)">+</span><span style="color:rgb(254,134,36)">+</span><span style="color:rgb(252,136,32)">+</span><span style="color:rgb(149,67,12)">%</span><span style="color:rgb(152,65,13)">%</span><span style="color:rgb(254,146,1)">+</span><span style="color:rgb(254,147,3)">;</span><span style="color:rgb(254,164,23)">;</span><span style="color:rgb(255,163,24)">;</span><span style="color:rgb(254,132,42)">+</span><span style="color:rgb(248,136,44)">+</span><span style="color:rgb(146,79,8)">%</span><span style="color:rgb(135,85,20)">%</span><span style="color:rgb(253,255,255)">.</span><span style="color:rgb(242,241,251)">.</span>
<span style="color:rgb(253,254,254)">.</span><span style="color:rgb(254,252,254)">.</span><span style="color:rgb(145,82,1)">%</span><span style="color:rgb(146,82,1)">%</span><span style="color:rgb(255,135,30)">+</span><span style="color:rgb(253,135,31)">+</span><span style="color:rgb(254,148,0)">;</span><span style="color:rgb(251,149,1)">;</span><span style="color:rgb(147,78,2)">%</span><span style="color:rgb(146,81,0)">%</span><span style="color:rgb(148,83,0)">?</span><span style="color:rgb(143,85,0)">%</span><span style="color:rgb(255,146,2)">+</span><span style="color:rgb(250,148,0)">+</span><span style="color:rgb(248,166,23)">;</span><span style="color:rgb(247,165,25)">;</span><span style="color:rgb(142,83,18)">?</span><span style="color:rgb(143,82,15)">%</span><span style="color:rgb(144,85,0)">?</span><span style="color:rgb(146,84,0)">?</span><span style="color:rgb(253,147,3)">;</span><span style="color:rgb(253,149,0)">;</span><span style="color:rgb(255,147,1)">;</span><span style="color:rgb(251,147,11)">;</span><span style="color:rgb(152,65,8)">%</span><span style="color:rgb(142,71,24)">%</span><span style="color:rgb(254,255,255)">.</span><span style="color:rgb(242,239,253)">.</span>
<span style="color:rgb(253,254,254)">.</span><span style="color:rgb(254,252,254)">.</span><span style="color:rgb(148,66,6)">%</span><span style="color:rgb(149,65,13)">%</span><span style="color:rgb(254,134,0)">+</span><span style="color:rgb(253,133,1)">+</span><span style="color:rgb(255,146,0)">+</span><span style="color:rgb(254,146,0)">+</span><span style="color:rgb(144,80,1)">%</span><span style="color:rgb(145,81,0)">%</span><span style="color:rgb(252,136,31)">+</span><span style="color:rgb(255,135,27)">+</span><span style="color:rgb(253,150,0)">;</span><span style="color:rgb(255,147,0)">;</span><span style="color:rgb(255,149,0)">;</span><span style="color:rgb(253,147,4)">;</span><span style="color:rgb(252,136,34)">+</span><span style="color:rgb(251,136,38)">+</span><span style="color:rgb(147,64,14)">%</span><span style="color:rgb(147,68,1)">%</span><span style="color:rgb(254,149,0)">;</span><span style="color:rgb(253,147,0)">+</span><span style="color:rgb(255,134,2)">+</span><span style="color:rgb(246,135,9)">+</span><span style="color:rgb(146,86,0)">?</span><span style="color:rgb(138,88,17)">?</span><span style="color:rgb(254,255,255)">.</span><span style="color:rgb(242,239,253)">.</span>
<span style="color:rgb(254,253,253)">.</span><span style="color:rgb(252,253,255)">.</span><span style="color:rgb(144,82,1)">%</span><span style="color:rgb(146,80,3)">%</span><span style="color:rgb(253,147,1)">+</span><span style="color:rgb(254,147,0)">+</span><span style="color:rgb(253,147,0)">+</span><span style="color:rgb(254,145,1)">+</span><span style="color:rgb(147,65,11)">%</span><span style="color:rgb(149,66,7)">%</span><span style="color:rgb(255,146,0)">+</span><span style="color:rgb(254,147,0)">+</span><span style="color:rgb(255,133,2)">+</span><span style="color:rgb(251,133,2)">+</span><span style="color:rgb(247,164,24)">;</span><span style="color:rgb(252,164,21)">;</span><span style="color:rgb(251,164,22)">;</span><span style="color:rgb(249,163,23)">;</span><span style="color:rgb(148,81,0)">%</span><span style="color:rgb(149,79,0)">%</span><span style="color:rgb(253,149,0)">;</span><span style="color:rgb(249,146,6)">+</span><span style="color:rgb(255,135,33)">+</span><span style="color:rgb(249,138,33)">+</span><span style="color:rgb(142,87,0)">?</span><span style="color:rgb(138,88,15)">?</span><span style="color:rgb(254,255,255)">.</span><span style="color:rgb(242,239,253)">.</span>
<span style="color:rgb(255,253,254)">.</span><span style="color:rgb(253,252,255)">.</span><span style="color:rgb(147,66,11)">%</span><span style="color:rgb(149,66,14)">%</span><span style="color:rgb(254,147,4)">;</span><span style="color:rgb(255,146,2)">+</span><span style="color:rgb(253,134,1)">+</span><span style="color:rgb(254,134,3)">+</span><span style="color:rgb(147,85,0)">?</span><span style="color:rgb(146,85,1)">?</span><span style="color:rgb(251,147,0)">+</span><span style="color:rgb(255,143,8)">+</span><span style="color:rgb(254,135,32)">+</span><span style="color:rgb(254,137,28)">+</span><span style="color:rgb(253,148,0)">;</span><span style="color:rgb(255,147,1)">;</span><span style="color:rgb(254,148,1)">;</span><span style="color:rgb(250,147,7)">+</span><span style="color:rgb(146,66,6)">%</span><span style="color:rgb(151,64,3)">%</span><span style="color:rgb(254,134,0)">+</span><span style="color:rgb(254,133,1)">+</span><span style="color:rgb(255,147,2)">;</span><span style="color:rgb(250,145,10)">+</span><span style="color:rgb(151,66,10)">%</span><span style="color:rgb(141,73,23)">%</span><span style="color:rgb(254,255,255)">.</span><span style="color:rgb(241,238,252)">.</span>
<span style="color:rgb(255,252,255)">.</span><span style="color:rgb(249,254,255)">.</span><span style="color:rgb(146,84,0)">?</span><span style="color:rgb(148,83,0)">?</span><span style="color:rgb(252,134,34)">+</span><span style="color:rgb(253,137,27)">+</span><span style="color:rgb(255,147,0)">;</span><span style="color:rgb(254,145,4)">+</span><span style="color:rgb(144,80,0)">%</span><span style="color:rgb(146,80,5)">%</span><span style="color:rgb(251,163,24)">;</span><span style="color:rgb(252,163,23)">;</span><span style="color:rgb(254,148,0)">;</span><span style="color:rgb(255,147,3)">;</span><span style="color:rgb(253,134,29)">+</span><span style="color:rgb(254,136,29)">+</span><span style="color:rgb(253,148,0)">;</span><span style="color:rgb(250,147,3)">+</span><span style="color:rgb(145,82,11)">?</span><span style="color:rgb(151,79,8)">%</span><span style="color:rgb(254,136,30)">+</span><span style="color:rgb(253,136,27)">+</span><span style="color:rgb(255,163,26)">;</span><span style="color:rgb(251,164,32)">;</span><span style="color:rgb(143,81,0)">%</span><span style="color:rgb(136,85,16)">%</span><span style="color:rgb(254,255,255)">.</span><span style="color:rgb(241,239,249)">.</span>
<span style="color:rgb(254,254,253)">.</span><span style="color:rgb(254,254,252)">.</span><span style="color:rgb(254,253,253)">.</span><span style="color:rgb(251,255,254)">.</span><span style="color:rgb(141,82,2)">%</span><span style="color:rgb(150,79,6)">%</span><span style="color:rgb(254,146,3)">+</span><span style="color:rgb(254,144,0)">+</span><span style="color:rgb(141,84,1)">%</span><span style="color:rgb(144,84,3)">%</span><span style="color:rgb(253,133,2)">+</span><span style="color:rgb(255,135,0)">+</span><span style="color:rgb(253,149,2)">;</span><span style="color:rgb(251,146,3)">+</span><span style="color:rgb(252,165,24)">;</span><span style="color:rgb(253,163,24)">;</span><span style="color:rgb(254,147,0)">+</span><span style="color:rgb(252,146,7)">+</span><span style="color:rgb(148,66,8)">%</span><span style="color:rgb(151,64,4)">%</span><span style="color:rgb(248,148,0)">+</span><span style="color:rgb(248,146,11)">+</span><span style="color:rgb(141,82,6)">%</span><span style="color:rgb(138,83,8)">%</span><span style="color:rgb(254,254,251)">.</span><span style="color:rgb(254,255,249)">.</span><span style="color:rgb(254,254,250)">.</span><span style="color:rgb(241,240,247)">.</span>
<span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgb(252,254,252)">.</span><span style="color:rgb(255,252,253)">.</span><span style="color:rgb(255,251,251)">.</span><span style="color:rgb(252,252,253)">.</span><span style="color:rgb(149,66,11)">%</span><span style="color:rgb(151,65,6)">%</span><span style="color:rgb(150,78,0)">%</span><span style="color:rgb(146,82,1)">%</span><span style="color:rgb(252,149,0)">;</span><span style="color:rgb(253,150,1)">;</span><span style="color:rgb(250,166,20)">;</span><span style="color:rgb(254,163,19)">;</span><span style="color:rgb(253,148,0)">;</span><span style="color:rgb(250,147,3)">+</span><span style="color:rgb(252,133,3)">+</span><span style="color:rgb(250,135,4)">+</span><span style="color:rgb(145,79,0)">%</span><span style="color:rgb(145,82,1)">%</span><span style="color:rgb(142,87,1)">?</span><span style="color:rgb(132,92,16)">?</span><span style="color:rgb(253,254,251)">.</span><span style="color:rgb(255,252,254)">.</span><span style="color:rgb(254,254,250)">.</span><span style="color:rgb(248,247,251)">.</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span>
<span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgb(252,255,254)">.</span><span style="color:rgb(254,254,253)">.</span><span style="color:rgb(253,254,250)">.</span><span style="color:rgb(254,253,250)">.</span><span style="color:rgb(254,253,248)">.</span><span style="color:rgb(251,253,251)">.</span><span style="color:rgb(147,88,7)">?</span><span style="color:rgb(147,78,4)">%</span><span style="color:rgb(146,66,10)">%</span><span style="color:rgb(148,69,10)">%</span><span style="color:rgb(147,80,0)">%</span><span style="color:rgb(146,79,3)">%</span><span style="color:rgb(144,86,2)">?</span><span style="color:rgb(142,85,10)">?</span><span style="color:rgb(253,253,251)">.</span><span style="color:rgb(255,253,250)">.</span><span style="color:rgb(254,254,252)">.</span><span style="color:rgb(250,250,248)">.</span><span style="color:rgb(254,255,254)">.</span><span style="color:rgb(252,252,252)">.</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span>
<span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgb(254,254,254)">.</span><span style="color:rgb(254,255,251)">.</span><span style="color:rgb(255,252,252)">.</span><span style="color:rgb(252,255,255)">.</span><span style="color:rgb(252,255,255)">.</span><span style="color:rgb(251,255,255)">.</span><span style="color:rgb(253,255,255)">.</span><span style="color:rgb(251,255,255)">.</span><span style="color:rgb(250,255,255)">.</span><span style="color:rgb(254,253,255)">.</span><span style="color:rgb(255,252,253)">.</span><span style="color:rgb(255,253,255)">.</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span><span style="color:rgba(0,0,0,0)">@</span></pre>
`;

const fortunes = [
  "Hello, world.",
  "There are 10 kinds of people: those who understand binary and those who don't.",
  "Segmentation fault (core dumped).",
  "Works on my machine.",
  "One more feature won't hurt.",
  "sudo make me a sandwich.",
  "The best code is the code you don't have to write.",
  "Never underestimate the bandwidth of a USB stick carried by a pigeon.",
  "Weeks of programming can save you hours of planning.",
  "640K ought to be enough for anybody.",
  "rm -rf / is not a speedrun category.",
  "Real programmers use tabs. Real debuggers don't care.",
  "It's not a bug; it's an undocumented feature.",
  "The compiler is trying its best.",
  "Your code compiled first try. Suspicious.",
  "Today's lucky number is 0xDEADBEEF.",
  "The rubber duck believes in you.",
  "You're probably overengineering this.",
  "There is no place like 127.0.0.1.",
  "Have you tried turning it off and on again?",
  "There is no cloud. It's just someone else's computer.",
  "Remember to commit before experimenting.",
  "git push --force is a lifestyle choice.",
  "A backup is worth more than an apology.",
  "Undefined behaviour keeps life interesting.",
  "The code you wrote six months ago was written by someone else.",
  "Every TODO eventually becomes documentation.",
  "If it ain't broke, someone will rewrite it in Rust.",
  "The borrow checker has denied your request.",
  "One does not simply finish a personal website.",
  "ASCII art improves performance by at least 12%.",
  "Powered by HTML, CSS, JavaScript, and hope.",
  "Please do not feed the JavaScript.",
  "Everything is a file. Except when it isn't.",
  "Permission denied... I think?",
  "You are visitor #" + Math.floor(Math.random() * 9000 + 1000),
  "Hack Club made me build this.",
  "Touching grass...",
  "Your package manager has 47 available updates.",
  "No ducks were harmed during debugging.",
  "Today's build status: green.",
  "The answer is 42.",
  "It's dangerous to code alone. Take this: ☕",
  "The README is always written last.",
  "One day this website will have a blog.",
  "Fun fact: this terminal isn't real.",
  "Alias your mistakes as 'legacy code'.",
  "Ctrl+Z doesn't work in real life.",
  "Some assembly required.",
  "Congratulations! You found the fortunes file.",
  "Welcome to ~/homepage.",
  "The source is probably on GitHub.",
  "No cookies were baked in the making of this website.",
  "This fortune intentionally left blank.",
  "The cake is a lie.",
  "Stay curious.",
  "I swear I didn't use AI for this",
  "Happy hacking!",
];

let startTime = 0;

setInterval(() => {
  updateClock();
  updateCPULoad();
  updateUptime();
}, 1000);

function updateClock() {
  var clock = document.querySelector("#clock");
  var time = "";
  var date = new Date();

  time = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  var secs = date.getSeconds();
  var secs_formatted;
  if (secs <= 9) {
    secs_formatted = "0" + secs.toString();
  } else {
    secs_formatted = secs.toString();
  }
  clock.innerText = time + `:${secs_formatted}`;
}

function updateUptime() {
  let now = Date.now();
  let elapsed = now - startTime;

  let seconds = Math.floor(elapsed / 1000);

  let uptime = `${seconds} seconds`;
  document.getElementById("nf-uptime").innerText = uptime;
}

function updateFortune() {
  let number = Math.floor(Math.random() * fortunes.length);
  let fortune = fortunes[number];
  document.getElementById("fortune").innerText = fortune;
}

function drawASCII() {
  document.getElementById("ascii").innerHTML = ascii;
}

document.addEventListener("DOMContentLoaded", () => {
  drawASCII();
  updateClock();
  updateCPULoad();
  updateNeofetch();
  updateFortune();
  updateScreenWidth();
  startTime = Date.now();
});

function updateScreenWidth() {
  var scwidth = document.querySelector("#screen-width");
  scwidth.innerText = `${window.innerWidth}px`;
}

function updateCPULoad() {
  var load = document.querySelector("#cpuload");
  load.innerText = Math.floor(Math.random() * 10);
}

function updateNeofetch() {
  document.getElementById("nf-os").innerText = getOS();
  document.getElementById("nf-host").innerText = getBrowser();
  document.getElementById("nf-cpu").innerText = getCPU();
  document.getElementById("nf-gpu").innerText = getGPU();
  document.getElementById("nf-packages").innerText = Math.floor(
    Math.random() * 500,
  );
}

function getBrowser() {
  const ua = navigator.userAgent;
  if (ua.includes("Chrome") && !ua.includes("Chromium")) return "Chrome";
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
  if (ua.includes("Edg")) return "Edge";
  return "Web Browser";
}

function getCPU() {
  const ua = navigator.userAgent;
  if (ua.includes("Chrome") && !ua.includes("Chromium")) return "V8";
  if (ua.includes("Firefox")) return "SpiderMonkey";
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "JavaScriptCore";
  if (ua.includes("Edg")) return "Chakra";
  return "Unknown";
}

function getGPU() {
  const ua = navigator.userAgent;
  if (ua.includes("Chrome") && !ua.includes("Chromium")) return "Blink";
  if (ua.includes("Firefox")) return "Gecko";
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "WebKit";
  if (ua.includes("Edg")) return "EdgeHTML";
  return "Unknown";
}

function getOS() {
  const ua = navigator.userAgent;
  if (ua.includes("Win"))
    return "Windows " + (ua.includes("NT 10.0") ? "10/11" : "8/7");
  if (ua.includes("Mac")) return "macOS";
  if (ua.includes("Linux")) return "Linux";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("like Mac")) return "iOS";
  return "Unknown OS";
}

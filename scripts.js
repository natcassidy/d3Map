const locations = [
    [100, 100],
    [25, 70],
    [200, 200]
]

//create canvas svg element



const canvas = d3.select('svg');

canvas.selectAll('circle')
    .data(locations)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
        return d[0];
    })
    .attr("cy", (d) => {
        return d[1];
    })
    .style("stroke", "3")
    .style("stroke-color", "green");
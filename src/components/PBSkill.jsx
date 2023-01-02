function PBSkill(
    {
        skillName,
        percentage,
        colorBar
    }
){
    return(
<div className="mt-5">
    <div class="flex justify-between mb-1 space-y-1">
        <span class="text-xl font-semibold">{skillName}</span>
        <span class="text-xl font-semibold">{percentage}</span>
    </div>
    <div class="w-full bg-white rounded-full h-4 border-2 border-black">
        <div class={`h-3 rounded-full ${colorBar}`} style={{width: `${percentage}`}}></div>
    </div>
</div>
    )
}

export default PBSkill;
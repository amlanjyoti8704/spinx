export function calculateMatchScore(
    current:string[],
    target:string[]
){

    const currentSet=new Set(current);

    const targetSet=new Set(target);

    const common=current.filter(skill=>
        targetSet.has(skill)
    );

    const total=new Set([
        ...current,
        ...target
    ]);

    const score=
        Math.round(
            common.length/
            total.size
            *100
        );

    return{
        score,

        commonSkills:common
    };

}
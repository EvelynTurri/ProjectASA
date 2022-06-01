;; problem file: problem-charging_base_firstfloor.pddl
(define (problem charging_base_firstfloor)
    (:domain charging_base_firstfloor)
    (:objects charging_base_firstfloor vaccum_cleaner_firstfloor)
	(:init (charger_base charging_base_firstfloor) (vaccum vaccum_cleaner_firstfloor) (out vaccum_cleaner_firstfloor charging_base_firstfloor))
	(:goal (and (in vaccum_cleaner_firstfloor charging_base_firstfloor)))
)

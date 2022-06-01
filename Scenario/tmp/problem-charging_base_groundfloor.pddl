;; problem file: problem-charging_base_groundfloor.pddl
(define (problem charging_base_groundfloor)
    (:domain charging_base_groundfloor)
    (:objects charging_base_groundfloor vaccum_cleaner_groundfloor)
	(:init (charger_base charging_base_groundfloor) (vaccum vaccum_cleaner_groundfloor) (out vaccum_cleaner_groundfloor charging_base_groundfloor))
	(:goal (and (in vaccum_cleaner_groundfloor charging_base_groundfloor)))
)

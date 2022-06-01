;; problem file: problem-charging_base_underground.pddl
(define (problem charging_base_underground)
    (:domain charging_base_underground)
    (:objects charging_base_underground vaccum_cleaner_underground)
	(:init (charger_base charging_base_underground) (vaccum vaccum_cleaner_underground) (out vaccum_cleaner_underground charging_base_underground))
	(:goal (and (in vaccum_cleaner_underground charging_base_underground)))
)

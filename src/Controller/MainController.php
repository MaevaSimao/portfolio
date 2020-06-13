<?php

namespace App\Controller;

use App\Entity\Skill;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function homepage()
    {
        
        return $this->render('main/homepage.html.twig', [
            
        ]);
    }

    /**
     * @Route("/competences", name="skill")
     */
    public function skill()
    {
        
        $skills = $this->getDoctrine()->getRepository(Skill::class)->findAll(); 

        return $this->render('main/skill.html.twig', [
             'skills' => $skills
        ]);
    }
}


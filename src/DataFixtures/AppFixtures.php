<?php


namespace App\DataFixtures;

use App\Entity\Skill;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        $skills =
        [
            "Php" => [
                "php-logo.jpg",
                "Intermédiaire"
            ], 
            "Bootstrap" => [
                "bootstrap-logo.jpg",
                "Confirmé"
            ], 
            "Html"  => [
                "html-logo.jpg",
                "Confirmé"
            ], 
            "Css" => [
                "css-logo.jpg",
                "Confirmé"
            ],  
            "javascript" => [
                "javascript-logo.jpg",
                "Débutant/Intermédiaire"
            ], 
            "Apache"=> [
                "apache-logo.jpg",
                "Intermédiaire"
            ],  
            "Debian" => [
                "debian-logo.jpg",
                "Débutant"
            ],  
            "Github" => [
                "github-logo.jpg",
                "Intermédiaire"
            ],  
            "Jquery" => [
                "jquery-logo.jpg",
                "Débutant/Intermédiaire"
            ],
            "Linux Mint" => [
                "LinuxMint-logo.jpg",
                "Intermédiaire"
            ],
            "Lumen" => [
                "lumen-logo.jpg",
                "Débutant"
            ],
            "Symfony" => [
                "symfony-logo.jpg",
                "Confirmé"
            ],
            "Mysql" => [
                "mysql-logo.jpg",
                "Confirmé"
            ],
            "Ovh" => [
                "ovh-logo.jpg",
                "Intermédiaire"
            ],
            "PhpMyAdmin" => [
                "phpMyAdmin-logo.jpg",
                "Confirmé"
            ],
            "Webpack" => [
                "webpack-logo.jpg",
                "Débutant/Intermédiaire"
            ],
            "Wordpress" => [
                "wordpress-logo.jpg",
                "Débutant"
            ],
            "Workbench" => [
                "workbench-logo.jpg",
                "Intermédiaire"
            ],
            "Photoshop" => [
                "photoshop-logo.jpg",
                "Débutant/Intermédiaire"
            ],
            
        ];

        $skillListObject = []; 

        
        foreach ($skills as $skillName => $imageOrLevel) {
            
            $skill = new Skill();
            $skill->setName($skillName);
            $skill->setImage($imageOrLevel[1]);
            $skill->setLevel($imageOrLevel[2]); 
            $skill->setCreatedAt(new DateTime());  
            
            $manager->persist($skill); 

            // Add objet category in list of objet category
            $skillListObject[] = $skill; 
        }

        $manager->flush(); 
    }
}
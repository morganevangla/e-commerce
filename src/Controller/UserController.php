<?php

namespace App\Controller;

use dump;
use App\Entity\Users;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\User\User;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class UserController extends AbstractController
{
     /**
     * @Route("/api/user/signup", name="register", methods={"POST"})
     */
    public function register(Request $request, EntityManagerInterface $manager)
    {
        
        $user = new Users();
        $data = json_decode($request->getContent());
        
        $user->setFirstName($data->{'First_name'});
        $user->setLastName($data->{'Last_name'});
        $user->setPicture($data->{'Picture'});
        $user->setPhone($data->{'Phone'});
        $user->setEmail($data->{'Email'});
        $user->setAnniversary(\DateTime::createFromFormat('Y-m-d', $data->{'Anniversary'}));
        $user->setPassword(password_hash($data->{'Password'}, PASSWORD_DEFAULT));
        $user->setAdress($data->{'Adress'});
        $user->setState($data->{'State'});
        $user->setPostal($data->{'Code_zip'});
        $user->setCountry($data->{'From'});
        $user->setAdmin(false);
      
        $manager->persist($user);
        $manager->flush();

        return new JsonResponse([
            'success_message' => 'Thank you for registering'
        ]);
    }

     /**
     * @Route("/api/user/login", name="login", methods={"POST"})
     */
    public function login(Request $request, EntityManagerInterface $manager)
    {
        $data = json_decode($request->getContent());
        $email = $data->{'Email'};
        $password = $data->{'Password'};

        $repository = $this->getDoctrine()->getRepository(Users::class);
        $user = $repository->findOneBy(array('Email' => $email));
       
        $emailValid = $user->getEmail();
        $idValid = $user->getId();
        $passwordValid = $user->getPassword();
        $adminValid = $user->getAdmin();
        $passwordOk = password_verify($password,$passwordValid);


        if($email === $emailValid && $passwordOk){
                    return new JsonResponse([
                        "email" => $emailValid, "admin" => $adminValid, "id" => $idValid
                        ]);
        }     
    }

     /**
     * @Route("/api/profile", name="profile", methods={"POST"})
     */
    public function profile(Request $request, EntityManagerInterface $manager)
    {
        $data = json_decode($request->getContent());
        $email = $data->{'email'};

        $repository = $this->getDoctrine()->getRepository(Users::class);
        $userinfo = $repository->findOneBy(array('Email' => $email));

        $UserArray[] = array(
            'id' => $userinfo->getId(),
            'picture' =>$userinfo->getPicture(),
            'email' => $userinfo->getEmail(),
            'prenom' => $userinfo->getLastName(),
            'nom' => $userinfo->getFirstName(),
            'anniversaire' => $userinfo->getAnniversary(),
            'tel' => $userinfo->getphone(),
            'password' =>$userinfo->getPassword(),
            'adresse' => $userinfo->getAdress(),
            'pays' => $userinfo->getState(),
            'postal' => $userinfo->getPostal(),
            'ville' => $userinfo->getCountry()
        );

        return new JsonResponse($UserArray);
    }

     /**
     * @Route("/api/user/edit", name="edit", methods={"POST"})
     */
    public function edit(Request $request, EntityManagerInterface $manager)
    {
        $data = json_decode($request->getContent());
        dump($data);
        $id = intval($data->{'ID'});
        $repository = $this->getDoctrine()->getRepository(Users::class);
        $user = $repository->find($id);

        $user->setPicture($data->{'Picture'});
        $user->setPhone($data->{'Phone'});
        $user->setEmail($data->{'Email'});
        $user->setPassword(password_hash($data->{'Password'}, PASSWORD_DEFAULT));
        $user->setAdress($data->{'Adress'});
        $user->setState($data->{'State'});
        $user->setPostal($data->{'Code_zip'});
        $user->setCountry($data->{'From'});
      
        $manager->persist($user);
        $manager->flush();

        return new JsonResponse([
            'success_message' => 'Compte modifié'
        ]);
    }
}
